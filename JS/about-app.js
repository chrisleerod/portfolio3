const card = document.querySelector('.sub-card');
const social1 = document.querySelector('.social1');
const social2 = document.querySelector('.social2');
const social3 = document.querySelector('.social3');
const social4 = document.querySelector('.social4');

var tl = gsap.timeline();

tl
    .from(".me", { duration: 4, opacity: 0, ease: Power3.easeOut }) 
    .from(".sub-card", { duration: 2, scaleX: 0, transformOrigin: "left", ease: Power3.easeOut }, .5)
    .from(".social1", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 1.9)
    .from(".social2", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.1)
    .from(".social3", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.3)
    .from(".social4", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.5);