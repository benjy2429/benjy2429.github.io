const smoothScroll = require('../node_modules/smooth-scroll/dist/js/smooth-scroll.js');
const aos = require('../node_modules/aos/dist/aos.js');

(function() {
  // SmoothScroll
  const smoothLinks = document.querySelectorAll('a[data-scroll]');
  Array.from(smoothLinks).forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(link.hash);
      target && smoothScroll.animateScroll(target, e.target, { speed: 750 });
    });
  });

  // AnimateOnScroll
  aos.init();

  console.debug('  ____  ______ _   _  _____          _____  _____   ');
  console.debug(' |  _ \\|  ____| \\ | |/ ____|   /\\   |  __ \\|  __ \\  ');
  console.debug(' | |_) | |__  |  \\| | |       /  \\  | |__) | |__) | ');
  console.debug(' |  _ <|  __| | . ` | |      / /\\ \\ |  _  /|  _  /  ');
  console.debug(' | |_) | |____| |\\  | |____ / ____ \\| | \\ \\| | \\ \\  ');
  console.debug(' |____/|______|_| \\_|\\_____/_/    \\_\\_|  \\_\\_|  \\_\\ ');

  const match = 'flip';
  var matchedIndex = 0;
  document.onkeyup = function(e) {
    if (e.key === match[matchedIndex]) {
      matchedIndex += 1;
    } else {
      matchedIndex = 0;
    }
    if (matchedIndex === match.length) {
      document.body.classList.toggle('flipped');
      matchedIndex = 0;
    }
  };

})();

// Google Anayltics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61816341-2', 'auto');
ga('send', 'pageview');
