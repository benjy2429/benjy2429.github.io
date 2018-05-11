/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/app.jsx":
/*!********************************!*\
  !*** ./src/components/app.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _header = __webpack_require__(/*! ./header */ \"./src/components/header.jsx\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _section = __webpack_require__(/*! ./section */ \"./src/components/section.jsx\");\n\nvar _section2 = _interopRequireDefault(_section);\n\nvar _projects = __webpack_require__(/*! ./projects */ \"./src/components/projects.jsx\");\n\nvar _projects2 = _interopRequireDefault(_projects);\n\nvar _contact = __webpack_require__(/*! ./contact */ \"./src/components/contact.jsx\");\n\nvar _contact2 = _interopRequireDefault(_contact);\n\nvar _footer = __webpack_require__(/*! ./footer */ \"./src/components/footer.jsx\");\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar education = {\n  sectionTitle: 'Education',\n  content: [{ text: 'I graduated from <a href=\"https://www.sheffield.ac.uk/\">The University of Sheffield</a> in 2015 with a First Class Masters degree in Computer Science. For my dissertation, I developed a real-time shadow puppet storytelling application using Microsoft’s Kinect sensor and C++.' }, { text: 'I also worked as a Student Abassador during my final years. This involved helping out at open days and events, demonstrating in technical activities and giving presentations about life as a student.' }]\n};\n\nvar work = {\n  sectionTitle: 'Work',\n  content: [{ text: 'I\\'m currently working as an associate software developer for <a href=\"https://www.sky.com\">Sky</a> in Leeds.' }, { text: 'I joined through the Software Engineering Academy graduate scheme. This involved a six month project developing a piece of software in an agile team. In our team, we created a digital whiteboard for visualising and orgainising development squads.' }, { text: 'These days you\\'ll find me in the Digital Help team programming mainly in ReactJS and Ruby. I deal with frontend apps such as the <a href=\"https://www.sky.com/help\">Help Homepage</a> and <a href=\"https://contactus.sky.com\">Contact Us</a> as well as backend services and CMS\\'s that power the help articles and diagnostic flows.' }]\n};\n\nvar projects = [{\n  title: 'CircleCI Build Monitor',\n  image: 'circleci.png',\n  text: 'A simple Ruby on Rails build monitor for CircleCI projects.',\n  link: {\n    text: 'View on GitHub',\n    href: 'https://github.com/benjy2429/circleci-build-monitor'\n  }\n}, {\n  title: 'Digital Whiteboard',\n  image: 'whiteboard.png',\n  text: 'A digital whiteboard built with ReactJS to manage development squads and employees.'\n}, {\n  title: 'Dissertation',\n  image: 'dissertation.png',\n  text: 'A real-time shadow puppet storytelling application using a Kinect sensor and C++.',\n  file: 'Dissertation_Ben_Carr.pdf'\n}, {\n  title: 'Social Sheffield',\n  image: 'social-sheffield.png',\n  text: 'A search tool designed to help you find events and activities to do around Sheffield.',\n  link: {\n    text: 'Visit site',\n    href: 'http://www.socialsheffield.net'\n  }\n}, {\n  title: 'Academicus',\n  image: 'academicus.png',\n  text: 'A Swift app that allows students to track their academic progress and achievements.'\n}, {\n  title: 'London Power Tunnels',\n  image: 'costain.png',\n  text: 'A system built for engineering firm Costain to monitor trains within underground tunnels.'\n}];\n\nvar socialLinks = [{\n  name: 'GitHub',\n  href: 'https://www.github.com/benjy2429'\n}, {\n  name: 'LinkedIn',\n  href: 'https://www.linkedin.com/in/benmcarr'\n}, {\n  name: 'Instagram',\n  href: 'https://www.instagram.com/benjy2429'\n}];\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_header2.default, null),\n        _react2.default.createElement(\n          'div',\n          { id: 'about', className: 'container' },\n          _react2.default.createElement(_section2.default, education),\n          _react2.default.createElement(_section2.default, work)\n        ),\n        _react2.default.createElement(_projects2.default, { projects: projects }),\n        _react2.default.createElement(_contact2.default, null),\n        _react2.default.createElement(_footer2.default, { socialLinks: socialLinks })\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n;\n\n//# sourceURL=webpack:///./src/components/app.jsx?");

/***/ }),

/***/ "./src/components/contact.jsx":
/*!************************************!*\
  !*** ./src/components/contact.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Contact = function (_React$Component) {\n  _inherits(Contact, _React$Component);\n\n  function Contact() {\n    _classCallCheck(this, Contact);\n\n    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));\n  }\n\n  _createClass(Contact, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"section\",\n        { className: \"contact\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"container\" },\n          _react2.default.createElement(\n            \"h2\",\n            { className: \"heading\" },\n            \"Contact\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            { className: \"subtitle\" },\n            \"I hope I've covered everything but if you have any questions or comments, drop me a message.\"\n          ),\n          _react2.default.createElement(\"script\", { src: \"/assets/contact.js\", type: \"text/javascript\" })\n        )\n      );\n    }\n  }]);\n\n  return Contact;\n}(_react2.default.Component);\n\nexports.default = Contact;\n;\n\n//# sourceURL=webpack:///./src/components/contact.jsx?");

/***/ }),

/***/ "./src/components/footer.jsx":
/*!***********************************!*\
  !*** ./src/components/footer.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      var socialLinks = this.props.socialLinks;\n\n      return _react2.default.createElement(\n        \"footer\",\n        { className: \"footer section-dark\" },\n        _react2.default.createElement(\n          \"ul\",\n          { className: \"social-links\" },\n          socialLinks.map(function (link) {\n            return _react2.default.createElement(\n              \"li\",\n              { key: link.name },\n              _react2.default.createElement(\n                \"a\",\n                { className: \"link-light\", href: link.href },\n                link.name\n              )\n            );\n          })\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          \"\\xA9 \",\n          new Date().getFullYear(),\n          \" | Ben Carr\"\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react2.default.Component);\n\nexports.default = Header;\n;\n\n//# sourceURL=webpack:///./src/components/footer.jsx?");

/***/ }),

/***/ "./src/components/header.jsx":
/*!***********************************!*\
  !*** ./src/components/header.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"section\",\n        { className: \"hero center-all\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"hero-content center-all-inner\" },\n          _react2.default.createElement(\n            \"h1\",\n            { className: \"name\" },\n            _react2.default.createElement(\n              \"span\",\n              { className: \"first\" },\n              \"Ben\"\n            ),\n            _react2.default.createElement(\n              \"span\",\n              { className: \"surname\" },\n              \"Carr\"\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"job-title\" },\n            \"Software Developer\"\n          )\n        ),\n        _react2.default.createElement(\"a\", { \"data-scroll\": true, href: \"#about\", className: \"chevron link-unstyled\" })\n      );\n    }\n  }]);\n\n  return Header;\n}(_react2.default.Component);\n\nexports.default = Header;\n;\n\n//# sourceURL=webpack:///./src/components/header.jsx?");

/***/ }),

/***/ "./src/components/projects.jsx":
/*!*************************************!*\
  !*** ./src/components/projects.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar renderProject = function renderProject(project) {\n  return _react2.default.createElement(\n    \"article\",\n    { key: project.title, className: \"col col-4 col-6-t col-12-m\" },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"project\" },\n      _react2.default.createElement(\"img\", { className: \"project-image\", src: \"/assets/projects/\" + project.image, alt: \"\" }),\n      _react2.default.createElement(\n        \"div\",\n        { className: \"project-content\" },\n        _react2.default.createElement(\n          \"h3\",\n          { className: \"project-title\" },\n          project.title\n        ),\n        _react2.default.createElement(\n          \"p\",\n          { className: \"project-description\" },\n          project.text\n        ),\n        project.link && _react2.default.createElement(\n          \"a\",\n          { className: \"project-link\", href: \"{project.link.href}\" },\n          project.link.text\n        ),\n        project.file && _react2.default.createElement(\n          \"a\",\n          { className: \"project-link\", href: \"/download/\" + project.file },\n          \"Download\"\n        )\n      )\n    )\n  );\n};\n\nvar Header = function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      var projects = this.props.projects;\n\n      return _react2.default.createElement(\n        \"section\",\n        { className: \"projects section-dark\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"container\" },\n          _react2.default.createElement(\n            \"h2\",\n            { className: \"heading\" },\n            \"Projects\"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            { className: \"subtitle\" },\n            \"These are some of the projects I've worked on, both at university and in my spare time.\"\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"row\" },\n            projects.map(renderProject)\n          )\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react2.default.Component);\n\nexports.default = Header;\n;\n\n//# sourceURL=webpack:///./src/components/projects.jsx?");

/***/ }),

/***/ "./src/components/section.jsx":
/*!************************************!*\
  !*** ./src/components/section.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar renderElement = function renderElement(_ref, index) {\n  var type = _ref.type,\n      title = _ref.title,\n      href = _ref.href,\n      text = _ref.text;\n\n  if (type == 'project') {\n    return _react2.default.createElement(\n      'div',\n      { key: 'section-' + index, className: 'project-link' },\n      _react2.default.createElement(\n        'a',\n        { href: href },\n        'Find out more about ',\n        title\n      )\n    );\n  }\n  return _react2.default.createElement('p', { key: 'section-' + index, dangerouslySetInnerHTML: { __html: text } });\n};\n\nvar Section = function (_React$Component) {\n  _inherits(Section, _React$Component);\n\n  function Section() {\n    _classCallCheck(this, Section);\n\n    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));\n  }\n\n  _createClass(Section, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          sectionTitle = _props.sectionTitle,\n          content = _props.content;\n\n      return _react2.default.createElement(\n        'section',\n        { className: 'section' },\n        _react2.default.createElement(\n          'div',\n          { className: 'row' },\n          _react2.default.createElement(\n            'div',\n            { className: 'sidebar col col-3 col-12-m' },\n            _react2.default.createElement(\n              'h2',\n              { className: 'section-title' },\n              sectionTitle\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'content col col-9 col-12-m' },\n            content.map(renderElement)\n          )\n        )\n      );\n    }\n  }]);\n\n  return Section;\n}(_react2.default.Component);\n\nexports.default = Section;\n\n//# sourceURL=webpack:///./src/components/section.jsx?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _app = __webpack_require__(/*! ./components/app */ \"./src/components/app.jsx\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('main'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });