!function e(t,o,n){function r(i,c){if(!o[i]){if(!t[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=o[i]={exports:{}};t[i][0].call(l.exports,function(e){var o=t[i][1][e];return r(o||e)},l,l.exports,e,t,o,n)}return o[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e,t,o){var n=e("../node_modules/smooth-scroll/dist/js/smooth-scroll.js"),r=e("../node_modules/aos/dist/aos.js");!function(){n.init({speed:750}),r.init()}(),function(e,t,o,n,r,a,i){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,a=t.createElement(o),i=t.getElementsByTagName(o)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",i.parentNode.insertBefore(a,i)}(window,document,"script",0,"ga"),ga("create","UA-61816341-2","auto"),ga("send","pageview")},{"../node_modules/aos/dist/aos.js":2,"../node_modules/smooth-scroll/dist/js/smooth-scroll.js":3}],2:[function(e,t,o){!function(e,n){"object"==typeof o&&"object"==typeof t?t.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof o?o.AOS=n():e.AOS=n()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=o(1),i=(n(a),o(5)),c=n(i),u=o(6),s=n(u),l=o(7),d=n(l),f=o(8),m=n(f),p=o(9),b=n(p),v=o(10),h=n(v),g=o(13),y=n(g),w=[],k=!1,x=document.all&&!window.atob,O={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},j=function(){return!(arguments.length<=0||void 0===arguments[0])&&arguments[0]&&(k=!0),k?(w=(0,h.default)(w,O),(0,b.default)(w,O.once),w):void 0},E=function(){w=(0,y.default)(),j()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},A=function(e){return e===!0||"mobile"===e&&m.default.mobile()||"phone"===e&&m.default.phone()||"tablet"===e&&m.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){return O=r(O,e),w=(0,y.default)(),A(O.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",O.easing),document.querySelector("body").setAttribute("data-aos-duration",O.duration),document.querySelector("body").setAttribute("data-aos-delay",O.delay),"DOMContentLoaded"===O.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===O.startEvent?window.addEventListener(O.startEvent,function(){j(!0)}):document.addEventListener(O.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,50,!0)),window.addEventListener("orientationchange",(0,s.default)(j,50,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,b.default)(w,O.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,s.default)(E,50,!0)}),(0,d.default)("[data-aos]",E),w)};e.exports={init:_,refresh:j,refreshHard:E}},function(e,t){},,,,function(e,t,o){"use strict";function n(e,t,o){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return r(o)&&(n="leading"in o?!!o.leading:n,a="trailing"in o?!!o.trailing:a),i(e,t,{leading:n,maxWait:t,trailing:a})}function r(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=o(6),c="Expected a function";e.exports=n},function(e,t){"use strict";function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,j=t,g=e.apply(n,o)}function a(e){return j=e,y=setTimeout(l,t),E?n(e):g}function i(e){var o=e-w,n=e-j,r=t-o;return S?x(r,h-n):r}function u(e){var o=e-w,n=e-j;return!w||o>=t||0>o||S&&n>=h}function l(){var e=O();return u(e)?d(e):void(y=setTimeout(l,i(e)))}function d(e){return clearTimeout(y),y=void 0,A&&b?n(e):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),w=j=0,b=v=y=void 0}function m(){return void 0===y?g:d(O())}function p(){var e=O(),o=u(e);if(b=arguments,v=this,w=e,o){if(void 0===y)return a(w);if(S)return clearTimeout(y),y=setTimeout(l,t),n(w)}return void 0===y&&(y=setTimeout(l,t)),g}var b,v,h,g,y,w=0,j=0,E=!1,S=!1,A=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,r(o)&&(E=!!o.leading,S="maxWait"in o,h=S?k(c(o.maxWait)||0,t):h,A="trailing"in o?!!o.trailing:A),p.cancel=f,p.flush=m,p}function n(e){var t=r(e)?w.call(e):"";return t==d||t==f}function r(e){var t=void 0===e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==(void 0===e?"undefined":u(e))}function i(e){return"symbol"==(void 0===e?"undefined":u(e))||a(e)&&w.call(e)==m}function c(e){if("number"==typeof e)return e;if(i(e))return l;if(r(e)){var t=n(e.valueOf)?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var o=v.test(e);return o||h.test(e)?g(e.slice(2),o?2:8):b.test(e)?l:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s="Expected a function",l=NaN,d="[object Function]",f="[object GeneratorFunction]",m="[object Symbol]",p=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,h=/^0o[0-7]+$/i,g=parseInt,y=Object.prototype,w=y.toString,k=Math.max,x=Math.min,O=Date.now;e.exports=o},function(e,t){"use strict";function o(e,t){i.push({selector:e,fn:t}),!c&&a&&(c=new a(n),c.observe(r.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),n()}function n(){for(var e,t,o=0,n=i.length;n>o;o++){e=i[o],t=r.querySelectorAll(e.selector);for(var a,c=0,u=t.length;u>c;c++)a=t[c],a.ready||(a.ready=!0,e.fn.call(a,a))}}Object.defineProperty(t,"__esModule",{value:!0});var r=window.document,a=window.MutationObserver||window.WebKitMutationObserver,i=[],c=void 0;t.default=o},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=function(){function e(){o(this,e)}return n(e,[{key:"phone",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"mobile",value:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,r=window.innerHeight;e.forEach(function(e,a){o(e,r+n,t)})};t.default=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(11),r=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(12),r=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(e,t){var o=0,n=0,a=window.innerHeight,i={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(n=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(e=document.querySelectorAll(i.anchor)[0]),o=(0,r.default)(e).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=a/2;break;case"bottom-center":o+=a/2+e.offsetHeight;break;case"center-center":o+=a/2+e.offsetHeight/2;break;case"top-top":o+=a;break;case"bottom-top":o+=e.offsetHeight+a;break;case"center-top":o+=e.offsetHeight/2+a}return i.anchorPlacement||i.offset||isNaN(t)||(n=t),o+n};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,o){t.push({node:e})}),t};t.default=o}])})},{}],3:[function(e,t,o){(function(e){!function(e,n){"function"==typeof define&&define.amd?define([],n(e)):"object"==typeof o?t.exports=n(e):e.smoothScroll=n(e)}(void 0!==e?e:this.window||this.global,function(e){"use strict";var t,o,n,r,a,i,c,u={},s="querySelector"in document&&"addEventListener"in e,l={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},d=function(){var e={},t=!1,o=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],o++);for(;o<n;o++){var r=arguments[o];!function(o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t&&"[object Object]"===Object.prototype.toString.call(o[n])?e[n]=d(!0,e[n],o[n]):e[n]=o[n])}(r)}return e},f=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},m=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=t.length;--o>=0&&t.item(o)!==this;);return o>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},p=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,o=String(e),n=o.length,r=-1,a="",i=o.charCodeAt(0);++r<n;){if(0===(t=o.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===i?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?o.charAt(r):"\\"+o.charAt(r)}return"#"+a},b=function(e,t){var o;return"easeInQuad"===e&&(o=t*t),"easeOutQuad"===e&&(o=t*(2-t)),"easeInOutQuad"===e&&(o=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e&&(o=t*t*t),"easeOutCubic"===e&&(o=--t*t*t+1),"easeInOutCubic"===e&&(o=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(o=t*t*t*t),"easeOutQuart"===e&&(o=1- --t*t*t*t),"easeInOutQuart"===e&&(o=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(o=t*t*t*t*t),"easeOutQuint"===e&&(o=1+--t*t*t*t*t),"easeInOutQuint"===e&&(o=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),o||t},v=function(e,t,o){var n=0;if(e.offsetParent)do{n+=e.offsetTop,e=e.offsetParent}while(e);return n=Math.max(n-t-o,0),Math.min(n,g()-h())},h=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},g=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},y=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},w=function(e){return e?f(e)+e.offsetTop:0},k=function(t,o,n){n||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,o))};u.animateScroll=function(o,n,i){var u=y(n?n.getAttribute("data-options"):null),s=d(t||l,i||{},u),f="[object Number]"===Object.prototype.toString.call(o),m=f||!o.tagName?null:o;if(f||m){var p=e.pageYOffset;s.selectorHeader&&!r&&(r=document.querySelector(s.selectorHeader)),a||(a=w(r));var h,x,O=f?o:v(m,a,parseInt(s.offset,10)),j=O-p,E=g(),S=0,A=function(t,r,a){var i=e.pageYOffset;(t==r||i==r||e.innerHeight+i>=E)&&(clearInterval(a),k(o,r,f),s.callback(o,n))},_=function(){S+=16,h=S/parseInt(s.speed,10),h=h>1?1:h,x=p+j*b(s.easing,h),e.scrollTo(0,Math.floor(x)),A(x,O,c)};0===e.pageYOffset&&e.scrollTo(0,0),function(){clearInterval(c),c=setInterval(_,16)}()}};var x=function(t){try{p(decodeURIComponent(e.location.hash))}catch(t){p(e.location.hash)}o&&(o.id=o.getAttribute("data-scroll-id"),u.animateScroll(o,n),o=null,n=null)},O=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(n=m(r.target,t.selector))&&"a"===n.tagName.toLowerCase()&&n.hostname===e.location.hostname&&n.pathname===e.location.pathname&&/#/.test(n.href)){var a;try{a=p(decodeURIComponent(n.hash))}catch(e){a=p(n.hash)}if("#"===a){r.preventDefault(),o=document.body;var i=o.id?o.id:"smooth-scroll-top";return o.setAttribute("data-scroll-id",i),o.id="",void(e.location.hash.substring(1)===i?x():e.location.hash=i)}o=document.querySelector(a),o&&(o.setAttribute("data-scroll-id",o.id),o.id="",n.hash===e.location.hash&&(r.preventDefault(),x()))}},j=function(e){i||(i=setTimeout(function(){i=null,a=w(r)},66))};return u.destroy=function(){t&&(document.removeEventListener("click",O,!1),e.removeEventListener("resize",j,!1),t=null,o=null,n=null,r=null,a=null,i=null,c=null)},u.init=function(o){s&&(u.destroy(),t=d(l,o||{}),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,a=w(r),document.addEventListener("click",O,!1),e.addEventListener("hashchange",x,!1),r&&e.addEventListener("resize",j,!1))},u})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);