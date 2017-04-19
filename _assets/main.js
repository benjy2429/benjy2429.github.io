const smoothScroll = require('../node_modules/smooth-scroll/dist/js/smooth-scroll.js');
const aos = require('../node_modules/aos/dist/aos.js');
const throttle = require('../node_modules/lodash.throttle');

(function() {
  // Navbar
  const navbar = document.getElementsByClassName('navbar')[0];
  const hamburger = document.getElementsByClassName('navbar-hamburger')[0];

  window.onscroll = throttle(function() {
    if (window.innerWidth > 768) {
      const scrollPos = window.pageYOffset || document.body.scrollTop;
      if (scrollPos > 15) {
        navbar.classList.remove('navbar-sticky');
      } else {
        navbar.classList.add('navbar-sticky');
      }
    }
  }, 100);

  hamburger.onclick = function(e) {
    e.preventDefault();
    navbar.classList.toggle('navbar-collapsed');
  }

  // SmoothScroll
  const smoothLinks = document.querySelectorAll('a[data-scroll]');
  Array.from(smoothLinks).forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(link.hash);
      target && smoothScroll.animateScroll(target, e.target, { speed: 750, offset: 50 });
      navbar.classList.remove('navbar-collapsed');
    });
  });

  // AnimateOnScroll
  aos.init();
})();

// Google Anayltics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61816341-2', 'auto');
ga('send', 'pageview');
