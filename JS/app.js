const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one');
const lineTwo = hamburger.querySelector('.line-two');
const lineThree = hamburger.querySelector('.line-three');
const links = document.querySelector('.mobile li');

const lines = [lineOne, lineTwo, lineThree];

var welcome = gsap.timeline();
var toggleMenu = gsap.timeline({ paused: true });
var navMenu = gsap.timeline({ paused: true });

toggleMenu.reversed(true); // IMPORTANT to set the init state to true
navMenu.reversed(true); // IMPORTANT to set the init state to true

const nextStateMap = {
  true: () => {
    toggleMenu.play();
    toggleMenu.reversed(false);
  },
  false: () => {
    toggleMenu.reverse();
    toggleMenu.reversed(true);
  }
}

toggleMenu
  .from(".mobile li", { duration: 0.75, y: 10, skewY: 5, stagger: 0.075, opacity: 0, ease: "circ.out" })
  .to(lineThree, .25, { transformOrigin: "50% 50%" }, "change")
  .to(lineOne, .25, { transformOrigin: "50% 50%" }, "change")
  .to(lineThree, .25, { y: -15 }, 0)
  .to(lineOne, .25, { y: 15 }, 0)
  .to(lineThree, .25, { rotation: -45 }, "cross")
  .to(lineOne, .25, { rotation: 45 }, "cross")

hamburger.addEventListener('click', () => {
  const isReversed = toggleMenu.reversed();
  hamburger.classList.toggle('js-x');
  nextStateMap[isReversed]();
})

function mobileNav() {
  var checkbox = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (checkbox.checked == true) {
    mobileNav.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    mobileNav.style.display = "none";
    document.body.style.overflow = "initial";
  }
}