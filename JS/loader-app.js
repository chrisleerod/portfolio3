const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const load = document.querySelector('.text-line span');

var tl = gsap.timeline();

tl
    .to(".box1", { duration: 1.5, scaleY: 0, transformOrigin: "bottom", ease: Power4.easeOut }, .2)
    .to(".box2", { duration: 1.5, scaleY: 0, transformOrigin: "bottom", ease: Power4.easeOut }, .5)
    .to(".box3", { duration: 1.5, scaleY: 0, transformOrigin: "bottom", ease: Power4.easeOut }, .8)
    .to(".box4", { duration: 1.5, scaleY: 0, transformOrigin: "bottom", ease: Power4.easeOut }, 1.1)