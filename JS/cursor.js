let mouseCursor = document.querySelector('.cursor');
let link = document.querySelectorAll('a');
let nav = document.querySelectorAll('.hamburger');
var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);
var followMouse = function() {
  key = requestAnimationFrame(followMouse);

  if (!x || !y) {
    x = xmouse;
    y = ymouse;
  } else {
    dx = (xmouse - x) * 0.125;
    dy = (ymouse - y) * 0.125;
    if (Math.abs(dx) + Math.abs(dy) < 0.1) {
      x = xmouse;
      y = ymouse;
    } else {
      x += dx;
      y += dy;
    }
  }
  cursor.style.left = x + 'px';
  cursor.style.top = $(".wrap").scrollTop + y + 'px';
};

var xmouse, ymouse;
var cursor = $('.cursor');
var x = void 0,
  y = void 0,
  dx = void 0,
  dy = void 0,
  tx = 0,
  ty = 0,
  key = -1;

$on('mousemove', function(e) {
  xmouse = e.clientX || e.pageX;
  ymouse = e.clientY || e.pageY;
});

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