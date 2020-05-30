/* =================

author: Karan Mhatre
email: me@karanmhatre.com
website: karanmhatre.com
  
================= */

// Function to add and remove the page transition screen
function pageTransition() {

    var tl = gsap.timeline();
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .5, scaleY: 1});
    tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 1 });
  }
  
  // Function to animate the content of each page
  
  $(function() {
  
    barba.init({
  
      sync: true,
  
      transitions: [{
  
        async leave(data) {
          
          const done = this.async();
          
          pageTransition();
          await delay(1000);
          done();
  
        }
      }]
    });
  
  });