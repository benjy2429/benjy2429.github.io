var smoothScroll = require('../node_modules/smooth-scroll/dist/js/smooth-scroll.js');
var aos = require('../node_modules/aos/dist/aos.js');

(function() {
  // SmoothScroll
  smoothScroll.init({ speed: 750 });

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
