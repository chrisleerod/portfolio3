let mouseCursor = document.querySelector('.cursor');
let link = document.querySelectorAll('a');
let nav = document.querySelectorAll('.hamburger');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

link.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-shrink');
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-shrink');
    })
});

nav.forEach(nav => {
    nav.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-shrink');
    })
    nav.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-shrink');
    })
});