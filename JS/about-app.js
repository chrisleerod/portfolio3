const card = document.querySelector('.sub-card');
const text = document.querySelector('.text-h1');
const social1 = document.querySelector('.social1');
const social2 = document.querySelector('.social2');
const social3 = document.querySelector('.social3');
const social4 = document.querySelector('.social4');

var tl = gsap.timeline();

tl
    .from(".me", { duration: 0.5, scaleX: 0, transformOrigin: "left", }, 0.75)
    .from(".me-pic", { duration: 0.5, opacity: 0 }, 1.25)
    .to(".me", { duration: 0.55, scaleX: 0, transformOrigin: "right", }, 1.25)
    .from(".sub-card", { duration: 2, scaleX: 0, transformOrigin: "left", ease: Power4.easeOut }, 1.5)
    .from(".social1", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.5)
    .from(".social2", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.7)
    .from(".social3", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.9)
    .from(".social4", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 3.1)
    .from(".text h1", { duration: 2, y: -50, ease: Power3.easeOut }, 3.3);
