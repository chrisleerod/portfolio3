window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var width = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / width) * 100;
  document.getElementById("myProgressMobile").style.width = scrolled + "%";
}