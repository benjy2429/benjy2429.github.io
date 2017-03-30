var smoothScroll = require('../node_modules/smooth-scroll/dist/js/smooth-scroll.js');
var aos = require('../node_modules/aos/dist/aos.js');

(function() {
  // SmoothScroll
  smoothScroll.init({ speed: 750 });

  // AnimateOnScroll
  aos.init();
})();
