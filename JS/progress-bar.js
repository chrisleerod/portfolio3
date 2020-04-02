window.onscroll = function() {myFunction2()};

function myFunction2() {
  var winScroll2 = document.body.scrollTop || document.documentElement.scrollTop;
  var height2 = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled2 = (winScroll2 / height2) * 100;
  document.getElementById("myProgress").style.height = scrolled2 + "%";
}