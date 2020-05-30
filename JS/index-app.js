const card = document.querySelector('.scroll-down');
const text = document.querySelector('.projects');    
const border = document.querySelector('.border');    
const spanAnim = document.querySelector('.spanAnim div');    

var tl = gsap.timeline();

tl
    .from(".spanAnim div", { duration: 0.75, y: 80, skewY: 5, stagger: 0.075, ease: "circ.out" }, 0.75)
    .from(".border", { duration: 1.5, scaleX: 0, transformOrigin: "left", ease: "circ.out" }, 2.1)
    .from(".arrow-text", { duration: 1, y: 51, skewY: 15, ease: "circ.out" }, 2)
    .from(".arrow", { duration: 1, y: -51, ease: "circ.out" }, 2)
    .from(".projects", { duration: 1, y: 101, skewY: 15, ease: "circ.out" }, 2.5)