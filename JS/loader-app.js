const loader = document.querySelector('.loader');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

var tl = gsap.timeline();

tl
    .to(".box1", { duration: 1.5, scaleX: 0, transformOrigin: "left", ease: Power4.easeOut }, .3)
    .to(".box2", { duration: 1.5, scaleX: 0, transformOrigin: "left", ease: Power4.easeOut }, .3)
    .to(".box3", { duration: 1.5, scaleX: 0, transformOrigin: "left", ease: Power4.easeOut }, .3)
    .to(".box4", { duration: 1.5, scaleX: 0, transformOrigin: "left", ease: Power4.easeOut }, .3)