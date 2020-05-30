const card = document.querySelector('.sub-card');
const text = document.querySelector('.text-h1');
const social1 = document.querySelector('.social1');
const social2 = document.querySelector('.social2');
const social3 = document.querySelector('.social3');
const social4 = document.querySelector('.social4');

var tl = gsap.timeline();

tl
    .from(".me-pic", { duration: 2, delay: -0.3, scale: 1.6, ease: Power2.easeInOut }, 1)
    .to(".me", { duration: 1.4, scaleX: 0, transformOrigin: "right", ease: Power2.easeInOut}, 1)
    .to(".sub-overlay", { duration: 1.4, scaleX: 0, transformOrigin: "left", ease: Power2.easeInOut }, 1)
    .from(".social1", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.3)
    .from(".social2", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.5)
    .from(".social3", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.7)
    .from(".social4", { duration: 2, y: 30, opacity: 0, ease: Power3.easeOut }, 2.9)
    .from(".text h1", { duration: 2, y: 50, ease: Power2.easeInOut }, 2.2);
