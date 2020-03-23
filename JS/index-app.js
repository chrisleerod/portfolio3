const card = document.querySelector('.scroll-down');
const text = document.querySelector('.projects');    

var tl = gsap.timeline();

tl
    .from(".arrow-text", { duration: 1, y: 51 }, 1.5)
    .from(".arrow", { duration: 1, y: -51 }, 1.5)
    .from(".projects", { duration: 1, y: 51 }, 2)