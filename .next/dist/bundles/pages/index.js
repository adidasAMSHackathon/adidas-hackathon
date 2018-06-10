module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/adikey.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/adikey.js";

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.js");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _section = __webpack_require__("./components/section.scss");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "section",
    {
      className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw aic section adikey",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(_sectionHeader2.default, { title: "Meet the match", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.", __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    _react2.default.createElement("video", { autoPlay: true, loop: true, muted: true, playsInline: true, src: "/static/videos/key-animation.mov", className: "jsx-" + _section2.default.__scopedHash + " " + "mockup video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    _react2.default.createElement(_style2.default, {
      styleId: _section2.default.__scopedHash,
      css: _section2.default.__scoped
    })
  );
};

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/footer.js";

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _footer = __webpack_require__("./components/footer.scss");

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "footer",
    {
      className: "jsx-" + _footer2.default.__scopedHash + " " + "flex jcc footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    "\xA9 Team wild \u2014 Adidas hackathon Amsterdam",
    _react2.default.createElement(_style2.default, {
      styleId: _footer2.default.__scopedHash,
      css: _footer2.default.__scoped
    })
  );
};

/***/ }),

/***/ "./components/footer.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('.footer{padding:2.2rem;font-size:1.4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRWtCLGVBQ0UsaUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9mb290ZXIuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AuZm9vdGVyIHtcbiAgcGFkZGluZzogMi4ycmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1gOyJdfQ== */\n/*@ sourceURL=components/footer.scss */');

_defaultExport.__hash = '2119495985';
_defaultExport.__scoped = '.footer.jsx-2766860016{padding:2.2rem;font-size:1.4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRWtCLGVBQ0UsaUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9mb290ZXIuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AuZm9vdGVyIHtcbiAgcGFkZGluZzogMi4ycmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1gOyJdfQ== */\n/*@ sourceURL=components/footer.scss */';
_defaultExport.__scopedHash = '2766860016';
exports.default = _defaultExport;

/***/ }),

/***/ "./components/hero.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/hero.js";

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _hero = __webpack_require__("./components/hero.scss");

var _hero2 = _interopRequireDefault(_hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  return _react2.default.createElement(
    "header",
    {
      className: "jsx-" + _hero2.default.__scopedHash + " " + "flex cnw jcc aic hero__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(
      "h1",
      {
        className: "jsx-" + _hero2.default.__scopedHash + " " + "hero__header__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      "Empowering users to create"
    ),
    _react2.default.createElement(
      "a",
      { href: "#how-it-works", className: "jsx-" + _hero2.default.__scopedHash + " " + "flex jcc cta hero__cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      _react2.default.createElement(
        "span",
        {
          className: "jsx-" + _hero2.default.__scopedHash + " " + "flex rnw jcc aic cta__text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        "discover more"
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _hero2.default.__scopedHash,
      css: _hero2.default.__scoped
    })
  );
};

/***/ }),

/***/ "./components/hero.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('.hero__header{margin:6.4rem 0 5.4rem;height:65vh;background:linear-gradient(to right,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%),url(/static/images/hero.jpg) bottom center/cover no-repeat;}.hero__header__title{font-size:3.6rem;font-weight:500;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;line-height:4.6rem;color:white;text-align:center;max-width:85%;}.cta:link,.cta:visited{font-size:1.1rem;font-weight:500;text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:white;padding:2.7rem 0;background:black;width:80%;border-radius:2px;}.hero__cta{margin:2.8rem 0 0;}.cta__text::after{content:"";display:block;background:url(/static/icons/ic-arrow-16-thin.png) center center/cover no-repeat;width:2.4rem;height:100%;margin-left:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVyby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUUwQixBQUlKLEFBVUYsQUFXQyxBQUdQLFdBQ0csTUF4QkksQUFVRixDQVVHLEtBeEJQLEVBNkJxRSxRQXhCM0QsQUFVRyxFQWR3SCx1QkFlOUgsZ0RBY04sYUFDRCxXQXpCUyxDQTBCRixrQkF6QkwsQ0F5Qk0sQ0FmUixVQVRRLEVBVUgsUUFqQmlJLFFBUWxJLENBVUMsYUFWQSxJQVdQLFVBQ1Esa0JBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9oZXJvLnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL0ZyZW5jaXMvRG9jdW1lbnRzL2FkaWRhcy1oYWNrYXRob24vYWRpZGFzLWhhY2thdGhvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLmhlcm9fX2hlYWRlciB7XG4gIG1hcmdpbjogNi40cmVtIDAgNS40cmVtO1xuICBoZWlnaHQ6IDY1dmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNCkgMTAwJSksIHVybCgvc3RhdGljL2ltYWdlcy9oZXJvLmpwZykgYm90dG9tIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcbiAgICBsaW5lLWhlaWdodDogNC42cmVtOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogODUlO1xuICB9XG59XG5cbi5jdGE6bGluayxcbi5jdGE6dmlzaXRlZCwge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyLjdyZW0gMDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmhlcm9fX2N0YSB7XG4gIG1hcmdpbjogMi44cmVtIDAgMDtcbn1cblxuLmN0YV9fdGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaWNvbnMvaWMtYXJyb3ctMTYtdGhpbi5wbmcpIGNlbnRlciBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyLjRyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDEuNnJlbTtcbn1gOyJdfQ== */\n/*@ sourceURL=components/hero.scss */');

_defaultExport.__hash = '1001948188';
_defaultExport.__scoped = '.hero__header.jsx-1922512669{margin:6.4rem 0 5.4rem;height:65vh;background:linear-gradient(to right,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%),url(/static/images/hero.jpg) bottom center/cover no-repeat;}.hero__header__title.jsx-1922512669{font-size:3.6rem;font-weight:500;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;line-height:4.6rem;color:white;text-align:center;max-width:85%;}.cta.jsx-1922512669:link,.cta.jsx-1922512669:visited{font-size:1.1rem;font-weight:500;text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:white;padding:2.7rem 0;background:black;width:80%;border-radius:2px;}.hero__cta.jsx-1922512669{margin:2.8rem 0 0;}.cta__text.jsx-1922512669::after{content:"";display:block;background:url(/static/icons/ic-arrow-16-thin.png) center center/cover no-repeat;width:2.4rem;height:100%;margin-left:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVyby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUUwQixBQUlKLEFBVUYsQUFXQyxBQUdQLFdBQ0csTUF4QkksQUFVRixDQVVHLEtBeEJQLEVBNkJxRSxRQXhCM0QsQUFVRyxFQWR3SCx1QkFlOUgsZ0RBY04sYUFDRCxXQXpCUyxDQTBCRixrQkF6QkwsQ0F5Qk0sQ0FmUixVQVRRLEVBVUgsUUFqQmlJLFFBUWxJLENBVUMsYUFWQSxJQVdQLFVBQ1Esa0JBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9oZXJvLnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL0ZyZW5jaXMvRG9jdW1lbnRzL2FkaWRhcy1oYWNrYXRob24vYWRpZGFzLWhhY2thdGhvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLmhlcm9fX2hlYWRlciB7XG4gIG1hcmdpbjogNi40cmVtIDAgNS40cmVtO1xuICBoZWlnaHQ6IDY1dmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNCkgMTAwJSksIHVybCgvc3RhdGljL2ltYWdlcy9oZXJvLmpwZykgYm90dG9tIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjRweDtcbiAgICBsaW5lLWhlaWdodDogNC42cmVtOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogODUlO1xuICB9XG59XG5cbi5jdGE6bGluayxcbi5jdGE6dmlzaXRlZCwge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyLjdyZW0gMDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmhlcm9fX2N0YSB7XG4gIG1hcmdpbjogMi44cmVtIDAgMDtcbn1cblxuLmN0YV9fdGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaWNvbnMvaWMtYXJyb3ctMTYtdGhpbi5wbmcpIGNlbnRlciBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyLjRyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDEuNnJlbTtcbn1gOyJdfQ== */\n/*@ sourceURL=components/hero.scss */';
_defaultExport.__scopedHash = '1922512669';
exports.default = _defaultExport;

/***/ }),

/***/ "./components/how-it-works.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/how-it-works.js";

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _slider = __webpack_require__("./components/slider.js");

var _slider2 = _interopRequireDefault(_slider);

var _section = __webpack_require__("./components/section.scss");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "section",
    {
      className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw aic section how-it-works",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(_slider2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    _react2.default.createElement(_style2.default, {
      styleId: _section2.default.__scopedHash,
      css: _section2.default.__scoped
    })
  );
};

/***/ }),

/***/ "./components/navigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/navigation.js";

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _navigation = __webpack_require__("./components/navigation.scss");

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  return _react2.default.createElement(
    "nav",
    {
      className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex rnw aic jcsb nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(
      "div",
      {
        className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex svg__container hamburger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      _react2.default.createElement("img", { src: "/static/svg/menu.svg", alt: "hamburger icon", className: "jsx-" + _navigation2.default.__scopedHash + " " + "svg menu-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })
    ),
    _react2.default.createElement("img", { src: "/static/images/adidas-logo.png", alt: "adidas logo", className: "jsx-" + _navigation2.default.__scopedHash + " " + "nav-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    _react2.default.createElement(
      "div",
      {
        className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex svg__container search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      _react2.default.createElement("img", { src: "/static/svg/search.svg", alt: "search icon", className: "jsx-" + _navigation2.default.__scopedHash + " " + "svg search-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _navigation2.default.__scopedHash,
      css: _navigation2.default.__scoped
    })
  );
};

/***/ }),

/***/ "./components/navigation.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('.nav{position:fixed;top:0;left:0;right:0;height:6.4rem;width:100%;background-color:black;}.nav-logo{width:4.5rem;height:3rem;}.svg__container{height:100%;}.hamburger{border-right:1px solid rgba(255,255,255,0.4);}.search{border-left:1px solid rgba(255,255,255,0.4);}.svg{padding:0 3.2rem;max-width:unset;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVrQixBQVFBLEFBSUgsQUFHb0MsQUFHRCxBQUc5QixZQVRKLENBSEMsRUFSUixFQXFCVSxJQXBCVCxJQU9RLEdBTlAsS0FtQlMsR0FsQkgsUUFja0MsQ0FIQyxLQVZ0QyxXQUNZLHVCQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2aWdhdGlvbi5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9GcmVuY2lzL0RvY3VtZW50cy9hZGlkYXMtaGFja2F0aG9uL2FkaWRhcy1oYWNrYXRob24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYEBpbXBvcnQgJ3ZhcnMuc2Nzcyc7XG5cbi5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNi40cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbiAgJi1sb2dvIHtcbiAgICB3aWR0aDogNC41cmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgfVxufVxuXG4uc3ZnX19jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oYW1idXJnZXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC40KTtcbn1cblxuLnNlYXJjaCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XG59XG5cbi5zdmcge1xuICBwYWRkaW5nOiAwIDMuMnJlbTtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cbmA7Il19 */\n/*@ sourceURL=components/navigation.scss */');

_defaultExport.__hash = '668440252';
_defaultExport.__scoped = '.nav.jsx-1256102653{position:fixed;top:0;left:0;right:0;height:6.4rem;width:100%;background-color:black;}.nav-logo.jsx-1256102653{width:4.5rem;height:3rem;}.svg__container.jsx-1256102653{height:100%;}.hamburger.jsx-1256102653{border-right:1px solid rgba(255,255,255,0.4);}.search.jsx-1256102653{border-left:1px solid rgba(255,255,255,0.4);}.svg.jsx-1256102653{padding:0 3.2rem;max-width:unset;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVrQixBQVFBLEFBSUgsQUFHb0MsQUFHRCxBQUc5QixZQVRKLENBSEMsRUFSUixFQXFCVSxJQXBCVCxJQU9RLEdBTlAsS0FtQlMsR0FsQkgsUUFja0MsQ0FIQyxLQVZ0QyxXQUNZLHVCQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2aWdhdGlvbi5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9GcmVuY2lzL0RvY3VtZW50cy9hZGlkYXMtaGFja2F0aG9uL2FkaWRhcy1oYWNrYXRob24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYEBpbXBvcnQgJ3ZhcnMuc2Nzcyc7XG5cbi5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNi40cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbiAgJi1sb2dvIHtcbiAgICB3aWR0aDogNC41cmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgfVxufVxuXG4uc3ZnX19jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oYW1idXJnZXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC40KTtcbn1cblxuLnNlYXJjaCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XG59XG5cbi5zdmcge1xuICBwYWRkaW5nOiAwIDMuMnJlbTtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cbmA7Il19 */\n/*@ sourceURL=components/navigation.scss */';
_defaultExport.__scopedHash = '1256102653';
exports.default = _defaultExport;

/***/ }),

/***/ "./components/newsletter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/newsletter.js";

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.js");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _newsletter = __webpack_require__("./components/newsletter.scss");

var _newsletter2 = _interopRequireDefault(_newsletter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "section",
    {
      className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex cnw section newsletter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(_sectionHeader2.default, { title: "Newsletter", description: "Be the first one to try it out. Sign up for our newsletter.", invert: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    _react2.default.createElement(
      "form",
      { method: "post", className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex cnw form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      _react2.default.createElement(
        "div",
        {
          className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex cnw input__group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        _react2.default.createElement(
          "label",
          { htmlFor: "email-field", className: "jsx-" + _newsletter2.default.__scopedHash + " " + "input__label hide",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          "Email"
        ),
        _react2.default.createElement("input", { id: "email-field", type: "email", name: "email", placeholder: "hackathon@adidas.com", className: "jsx-" + _newsletter2.default.__scopedHash + " " + "input input__field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        })
      ),
      _react2.default.createElement(
        "div",
        {
          className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex cnw input__group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        _react2.default.createElement(
          "button",
          { type: "submit", className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex jcc aic input input__submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          "Subscribe"
        )
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _newsletter2.default.__scopedHash,
      css: _newsletter2.default.__scoped
    })
  );
};

/***/ }),

/***/ "./components/newsletter.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('.newsletter{background:black;padding:4.8rem 2.4rem;}.input__group+.input__group{margin:1.6rem 0 0;}.input{background:white;color:black;padding:2.4rem;border-radius:2px;}.input__field{padding:2.2rem;border:none;}.input__submit{background:transparent;border:1px solid white;color:white;text-transform:uppercase;font-size:1.1rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:2rem;-webkit-appearance:none;}.input__submit::after{content:"";display:block;background:url(/static/icons/ic-arrow-16-thin.png) center center/cover no-repeat;width:2.4rem;height:2.4rem;margin-left:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmV3c2xldHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVvQixBQUlDLEFBR0QsQUFNRixBQUlRLEFBU1YsV0FDRyxJQWJKLEVBYlUsQUFPVixDQUpPLEtBY0ksRUFVNEQsRUFkdEUsRUFMRSxVQVJRLEtBU0wsRUFTTixZQUNhLElBVk4scUJBV0YsaUJBQ0UsTUFPSixhQUNDLGNBQ0ssbUJBQUMseUNBUlQsYUFDVyx3QkFBQyIsImZpbGUiOiJjb21wb25lbnRzL25ld3NsZXR0ZXIuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AubmV3c2xldHRlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwYWRkaW5nOiA0LjhyZW0gMi40cmVtO1xufVxuXG4uaW5wdXRfX2dyb3VwICsgLmlucHV0X19ncm91cCB7XG4gIG1hcmdpbjogMS42cmVtIDAgMDtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMi40cmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5pbnB1dF9fZmllbGQge1xuICBwYWRkaW5nOiAyLjJyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmlucHV0X19zdWJtaXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pY29ucy9pYy1hcnJvdy0xNi10aGluLnBuZykgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMi40cmVtO1xuICAgIGhlaWdodDogMi40cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxLjZyZW07XG4gIH1cbn1gOyJdfQ== */\n/*@ sourceURL=components/newsletter.scss */');

_defaultExport.__hash = '1964918706';
_defaultExport.__scoped = '.newsletter.jsx-3761751155{background:black;padding:4.8rem 2.4rem;}.input__group.jsx-3761751155+.input__group.jsx-3761751155{margin:1.6rem 0 0;}.input.jsx-3761751155{background:white;color:black;padding:2.4rem;border-radius:2px;}.input__field.jsx-3761751155{padding:2.2rem;border:none;}.input__submit.jsx-3761751155{background:transparent;border:1px solid white;color:white;text-transform:uppercase;font-size:1.1rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:2rem;-webkit-appearance:none;}.input__submit.jsx-3761751155::after{content:"";display:block;background:url(/static/icons/ic-arrow-16-thin.png) center center/cover no-repeat;width:2.4rem;height:2.4rem;margin-left:1.6rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmV3c2xldHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVvQixBQUlDLEFBR0QsQUFNRixBQUlRLEFBU1YsV0FDRyxJQWJKLEVBYlUsQUFPVixDQUpPLEtBY0ksRUFVNEQsRUFkdEUsRUFMRSxVQVJRLEtBU0wsRUFTTixZQUNhLElBVk4scUJBV0YsaUJBQ0UsTUFPSixhQUNDLGNBQ0ssbUJBQUMseUNBUlQsYUFDVyx3QkFBQyIsImZpbGUiOiJjb21wb25lbnRzL25ld3NsZXR0ZXIuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AubmV3c2xldHRlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwYWRkaW5nOiA0LjhyZW0gMi40cmVtO1xufVxuXG4uaW5wdXRfX2dyb3VwICsgLmlucHV0X19ncm91cCB7XG4gIG1hcmdpbjogMS42cmVtIDAgMDtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMi40cmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5pbnB1dF9fZmllbGQge1xuICBwYWRkaW5nOiAyLjJyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmlucHV0X19zdWJtaXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pY29ucy9pYy1hcnJvdy0xNi10aGluLnBuZykgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMi40cmVtO1xuICAgIGhlaWdodDogMi40cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxLjZyZW07XG4gIH1cbn1gOyJdfQ== */\n/*@ sourceURL=components/newsletter.scss */';
_defaultExport.__scopedHash = '3761751155';
exports.default = _defaultExport;

/***/ }),

/***/ "./components/section-header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/section-header.js";

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.scss");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var title = _ref.title,
      description = _ref.description,
      invert = _ref.invert;

  return _react2.default.createElement(
    "div",
    {
      className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + "section__header__wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    _react2.default.createElement(
      "header",
      {
        className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + "flex cnw section__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      _react2.default.createElement(
        "h1",
        {
          className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + ((invert ? "section__title section__title--white" : "section__title") || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        title
      )
    ),
    _react2.default.createElement(
      "p",
      {
        className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + ((invert ? "section__description section__description--white" : "section__description") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      description
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _sectionHeader2.default.__scopedHash,
      css: _sectionHeader2.default.__scoped
    })
  );
};

/***/ }),

/***/ "./components/section-header.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('.section__title--white,.section__description--white{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFHZSxZQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXIuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Auc2VjdGlvbl9fdGl0bGUtLXdoaXRlLCBcbi5zZWN0aW9uX19kZXNjcmlwdGlvbi0td2hpdGUge1xuICBjb2xvcjogd2hpdGVcbn1gOyJdfQ== */\n/*@ sourceURL=components/section-header.scss */');

_defaultExport.__hash = '1520444829';
_defaultExport.__scoped = '.section__title--white.jsx-2245935900,.section__description--white.jsx-2245935900{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFHZSxZQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXIuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Auc2VjdGlvbl9fdGl0bGUtLXdoaXRlLCBcbi5zZWN0aW9uX19kZXNjcmlwdGlvbi0td2hpdGUge1xuICBjb2xvcjogd2hpdGVcbn1gOyJdfQ== */\n/*@ sourceURL=components/section-header.scss */';
_defaultExport.__scopedHash = '2245935900';
exports.default = _defaultExport;

/***/ }),

/***/ "./components/section.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('.section{margin:0 0 5.4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVxQixrQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL3NlY3Rpb24uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Auc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAwIDUuNHJlbTtcbn1gOyJdfQ== */\n/*@ sourceURL=components/section.scss */');

_defaultExport.__hash = '2939011203';
_defaultExport.__scoped = '.section.jsx-3547183266{margin:0 0 5.4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVxQixrQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL3NlY3Rpb24uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Auc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAwIDUuNHJlbTtcbn1gOyJdfQ== */\n/*@ sourceURL=components/section.scss */';
_defaultExport.__scopedHash = '3547183266';
exports.default = _defaultExport;

/***/ }),

/***/ "./components/slider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/slider.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.js");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _slider = __webpack_require__("./components/slider.scss");

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      current: 0,
      content: [{
        description: "Start by scanning your environment",
        image: "/static/images/content/02.jpg"
      }, {
        description: "Scanning 02",
        image: "/static/images/content/05.jpg"
      }, {
        description: "Scanning 03",
        image: "/static/images/content/02.jpg"
      }]
    }, _this.handlePreviousImage = function () {
      console.log("handlePreviousImage");
      var _this$state = _this.state,
          current = _this$state.current,
          content = _this$state.content;


      var nextCurrent = current - 1;

      if (nextCurrent < 0) {
        nextCurrent = content.length - 1;
      }

      _this.setState({ current: nextCurrent });
    }, _this.handleNextImage = function () {
      console.log("handleNextImage");
      var _this$state2 = _this.state,
          current = _this$state2.current,
          content = _this$state2.content;


      var nextCurrent = current + 1;

      if (nextCurrent >= content.length) {
        nextCurrent %= content.length;
      }

      _this.setState({ current: nextCurrent });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          current = _state.current,
          content = _state.content;

      return _react2.default.createElement(
        "article",
        {
          className: "jsx-" + _slider2.default.__scopedHash + " " + "flex cnw aic slider-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        _react2.default.createElement(_sectionHeader2.default, { title: "How it works", description: content[current].description, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }),
        _react2.default.createElement(
          "div",
          {
            className: "jsx-" + _slider2.default.__scopedHash + " " + "flex jcc aic button button--left",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          _react2.default.createElement("img", { src: "/static/icons/ic-arrow-16-thin.png", alt: "left button", onClick: this.handlePreviousImage, className: "jsx-" + _slider2.default.__scopedHash + " " + "button--left__image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          })
        ),
        _react2.default.createElement("img", { src: content[current].image, alt: "app screen", className: "jsx-" + _slider2.default.__scopedHash + " " + "slider__image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }),
        _react2.default.createElement(
          "div",
          { onClick: this.handleNextImage, className: "jsx-" + _slider2.default.__scopedHash + " " + "flex jcc aic button button--right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          _react2.default.createElement("img", { src: "/static/icons/ic-arrow-16-thin.png", alt: "left button", className: "jsx-" + _slider2.default.__scopedHash + " " + "button--right__image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          })
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _slider2.default.__scopedHash,
          css: _slider2.default.__scoped
        })
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ "./components/slider.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('.slider-content{position:relative;}.slider__image{box-shadow:1px 5px 48px -7px rgba(0,0,0,0.24);width:60%;height:auto;}.button{width:46px;height:46px;background:black;border-radius:50%;position:absolute;top:50%;left:4rem;z-index:9999;}.button--left__image{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.button--right{right:4rem;left:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2xpZGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRXFCLEFBRytCLEFBS3RDLEFBU2dCLEFBRWQsV0FWRCxBQVdBLE9BcEJPLEdBb0JOLEVBVkksaUJBQ0MsTUFQUixVQUNFLEVBT00sVUFQTCxRQVFMLFFBQ0UsR0FHa0IsT0FGZixhQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2xpZGVyLnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL0ZyZW5jaXMvRG9jdW1lbnRzL2FkaWRhcy1oYWNrYXRob24vYWRpZGFzLWhhY2thdGhvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLnNsaWRlci1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2xpZGVyX19pbWFnZSB7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggNDhweCAtN3B4IHJnYmEoMCwwLDAsMC4yNCk7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiA0NnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDRyZW07XG4gIHotaW5kZXg6IDk5OTk7XG5cbiAgJi0tbGVmdF9faW1hZ2Uge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cblxuICAmLS1yaWdodCB7XG4gICAgcmlnaHQ6IDRyZW07XG4gICAgbGVmdDogYXV0bztcbiAgfVxufWA7Il19 */\n/*@ sourceURL=components/slider.scss */');

_defaultExport.__hash = '3479538649';
_defaultExport.__scoped = '.slider-content.jsx-983701592{position:relative;}.slider__image.jsx-983701592{box-shadow:1px 5px 48px -7px rgba(0,0,0,0.24);width:60%;height:auto;}.button.jsx-983701592{width:46px;height:46px;background:black;border-radius:50%;position:absolute;top:50%;left:4rem;z-index:9999;}.button--left__image.jsx-983701592{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.button--right.jsx-983701592{right:4rem;left:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2xpZGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRXFCLEFBRytCLEFBS3RDLEFBU2dCLEFBRWQsV0FWRCxBQVdBLE9BcEJPLEdBb0JOLEVBVkksaUJBQ0MsTUFQUixVQUNFLEVBT00sVUFQTCxRQVFMLFFBQ0UsR0FHa0IsT0FGZixhQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2xpZGVyLnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL0ZyZW5jaXMvRG9jdW1lbnRzL2FkaWRhcy1oYWNrYXRob24vYWRpZGFzLWhhY2thdGhvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLnNsaWRlci1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2xpZGVyX19pbWFnZSB7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggNDhweCAtN3B4IHJnYmEoMCwwLDAsMC4yNCk7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiA0NnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDRyZW07XG4gIHotaW5kZXg6IDk5OTk7XG5cbiAgJi0tbGVmdF9faW1hZ2Uge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cblxuICAmLS1yaWdodCB7XG4gICAgcmlnaHQ6IDRyZW07XG4gICAgbGVmdDogYXV0bztcbiAgfVxufWA7Il19 */\n/*@ sourceURL=components/slider.scss */';
_defaultExport.__scopedHash = '983701592';
exports.default = _defaultExport;

/***/ }),

/***/ "./global.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Regular.woff") format("woff");font-weight:normal;font-style:normal;}@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Medium.woff") format("woff");font-weight:500;font-style:normal;}html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}ul{list-style:none;}button,input,select,textarea{margin:0;}html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}img,embed,iframe,object,audio,video{height:auto;max-width:100%;}iframe{border:0;}table{border-collapse:collapse;border-spacing:0;}td,th{padding:0;text-align:left;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}html{font-size:62.5%;}body{font-family:"Adihaus";font-weight:normal;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.rnw{-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.rw{-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}.cnw{-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.jcsb{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.jcsa{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.jcc{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.jcfe{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.aic{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.aifs{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.asfs{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.asfe{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}h1{font-size:2.4rem;line-height:3rem;-webkit-letter-spacing:.2px;-moz-letter-spacing:.2px;-ms-letter-spacing:.2px;letter-spacing:.2px;font-weight:500;text-align:center;}p{margin-top:1.6rem;font-size:1.6rem;line-height:2.6rem;-webkit-letter-spacing:.2px;-moz-letter-spacing:.2px;-ms-letter-spacing:.2px;letter-spacing:.2px;font-weight:normal;text-align:center;margin-bottom:3.5rem;}.mockup{box-shadow:1px 5px 48px -7px rgba(0,0,0,0.24);width:60%;height:auto;}.hide{display:none;}::-webkit-input-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}::-moz-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}:-ms-input-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}:-moz-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdZLEFBSU0sQUFJQyxBQUdQLEFBR2EsQUFHSCxBQUdQLEFBSUgsQUFHZ0IsQUFJZixBQUlXLEFBS0MsQUFNQSxBQU1OLEFBR00sQUFJVCxBQUdRLEFBR0YsQUFHSyxBQUdNLEFBR0QsQUFHTixBQUdFLEFBR04sQUFHSSxBQUdELEFBR0YsQUFHSCxBQU9DLEFBUytCLEFBS3BDLEFBR2EsQUFNQSxBQU1BLEFBTUEsU0F4SWhCLEFBVUEsQUFhQSxDQVFNLEVBWEQsQ0ErRkQsRUEvR0ssQ0FHRixBQTRDQSxDQTRDQSxDQU9BLENBdEdOLEFBZ0JTLEdBSEcsQUEyQnlDLEFBTUQsQUFTNUMsQ0FnRUcsQUFNQSxBQU1BLEFBTUEsRUE5R0wsQ0FJQSxDQVhELE9BaEJJLEFBNEZBLENBT0QsTUFoREMsQ0E1QkYsR0E2RkMsQUFNQSxBQU1BLEFBTUEsQ0EzQlQsSUE1RUUsSUFxRVEsRUFRUixNQTdFQyxFQXNGTyxBQU1BLEFBTUEsQUFNQSxJQTNCUCxDQWhETyxHQTJCQyxFQWpDUCxDQUdRLEdBMkJDLE1BckJFLENBcEJULENBTkcsT0F5Q0MsSUFITSxFQUhGLEVBNUJOLElBTkEsSUEyQ00sTUFmTyxJQXRCWixJQU5BLEFBK0JXLFFBd0JkLGdCQUNFLElBT0MsVUFnQkUsQUFNQSxBQU1BLEFBTUEsSUF6Q0YsS0FRRCxrQkFDRyxxQkFBQyIsImZpbGUiOiJnbG9iYWwuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AvKiBtaW5pcmVzZXQuY3NzIHYwLjAuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvbWluaXJlc2V0LmNzcyAqL1xuaHRtbCxib2R5LHAsb2wsdWwsbGksZGwsZHQsZGQsYmxvY2txdW90ZSxmaWd1cmUsZmllbGRzZXQsbGVnZW5kLHRleHRhcmVhLHByZSxpZnJhbWUsaHIsaDEsaDIsaDMsaDQsaDUsaDZ7bWFyZ2luOjA7cGFkZGluZzowfWgxLGgyLGgzLGg0LGg1LGg2e2ZvbnQtc2l6ZToxMDAlO2ZvbnQtd2VpZ2h0Om5vcm1hbH11bHtsaXN0LXN0eWxlOm5vbmV9YnV0dG9uLGlucHV0LHNlbGVjdCx0ZXh0YXJlYXttYXJnaW46MH1odG1se2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLCo6YmVmb3JlLCo6YWZ0ZXJ7Ym94LXNpemluZzppbmhlcml0fWltZyxlbWJlZCxpZnJhbWUsb2JqZWN0LGF1ZGlvLHZpZGVve2hlaWdodDphdXRvO21heC13aWR0aDoxMDAlfWlmcmFtZXtib3JkZXI6MH10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH10ZCx0aHtwYWRkaW5nOjA7dGV4dC1hbGlnbjpsZWZ0fWF7dGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiBibGFjazt9XG4vKiBmb250IGZhY2UgZGVjbGFyYXRpb25zICovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBZGloYXVzXCI7XG4gIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0FkaWhhdXNESU4tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvQWRpaGF1c0RJTi1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiQWRpaGF1c1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ybncge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG59XG5cbi5ydyB7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG5cbi5jbncge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbi5qY3NiIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uamNzYSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uamNjIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5qY2ZlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmFpYyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5haWZzIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5hc2ZzIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmFzZmUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIGxldHRlci1zcGFjaW5nOiAuMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAxLjZyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBsaW5lLWhlaWdodDogMi42cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLjJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XG59XG5cbi5tb2NrdXAge1xuICBib3gtc2hhZG93OiAxcHggNXB4IDQ4cHggLTdweCByZ2JhKDAsMCwwLDAuMjQpO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC4yNCk7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC42cHhcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuMjQpO1xuICBmb250LWZhbWlseTogXCJBZGloYXVzXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAuNnB4XG59XG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC4yNCk7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC42cHhcbn1cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC4yNCk7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC42cHhcbn1gOyJdfQ== */\n/*@ sourceURL=global.scss */');

_defaultExport.__hash = '4240345115';
_defaultExport.__scoped = '@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Regular.woff") format("woff");font-weight:normal;font-style:normal;}@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Medium.woff") format("woff");font-weight:500;font-style:normal;}html.jsx-3418516378,body.jsx-3418516378,p.jsx-3418516378,ol.jsx-3418516378,ul.jsx-3418516378,li.jsx-3418516378,dl.jsx-3418516378,dt.jsx-3418516378,dd.jsx-3418516378,blockquote.jsx-3418516378,figure.jsx-3418516378,fieldset.jsx-3418516378,legend.jsx-3418516378,textarea.jsx-3418516378,pre.jsx-3418516378,iframe.jsx-3418516378,hr.jsx-3418516378,h1.jsx-3418516378,h2.jsx-3418516378,h3.jsx-3418516378,h4.jsx-3418516378,h5.jsx-3418516378,h6.jsx-3418516378{margin:0;padding:0;}h1.jsx-3418516378,h2.jsx-3418516378,h3.jsx-3418516378,h4.jsx-3418516378,h5.jsx-3418516378,h6.jsx-3418516378{font-size:100%;font-weight:normal;}ul.jsx-3418516378{list-style:none;}button.jsx-3418516378,input.jsx-3418516378,select.jsx-3418516378,textarea.jsx-3418516378{margin:0;}html.jsx-3418516378{box-sizing:border-box;}*.jsx-3418516378,*.jsx-3418516378:before,*.jsx-3418516378:after{box-sizing:inherit;}img.jsx-3418516378,embed.jsx-3418516378,iframe.jsx-3418516378,object.jsx-3418516378,audio.jsx-3418516378,video.jsx-3418516378{height:auto;max-width:100%;}iframe.jsx-3418516378{border:0;}table.jsx-3418516378{border-collapse:collapse;border-spacing:0;}td.jsx-3418516378,th.jsx-3418516378{padding:0;text-align:left;}a.jsx-3418516378{-webkit-text-decoration:none;text-decoration:none;color:black;}html.jsx-3418516378{font-size:62.5%;}body.jsx-3418516378{font-family:"Adihaus";font-weight:normal;}.flex.jsx-3418516378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.rnw.jsx-3418516378{-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.rw.jsx-3418516378{-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}.cnw.jsx-3418516378{-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.jcsb.jsx-3418516378{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.jcsa.jsx-3418516378{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.jcc.jsx-3418516378{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.jcfe.jsx-3418516378{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.aic.jsx-3418516378{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.aifs.jsx-3418516378{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.asfs.jsx-3418516378{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.asfe.jsx-3418516378{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}h1.jsx-3418516378{font-size:2.4rem;line-height:3rem;-webkit-letter-spacing:.2px;-moz-letter-spacing:.2px;-ms-letter-spacing:.2px;letter-spacing:.2px;font-weight:500;text-align:center;}p.jsx-3418516378{margin-top:1.6rem;font-size:1.6rem;line-height:2.6rem;-webkit-letter-spacing:.2px;-moz-letter-spacing:.2px;-ms-letter-spacing:.2px;letter-spacing:.2px;font-weight:normal;text-align:center;margin-bottom:3.5rem;}.mockup.jsx-3418516378{box-shadow:1px 5px 48px -7px rgba(0,0,0,0.24);width:60%;height:auto;}.hide.jsx-3418516378{display:none;}.jsx-3418516378::-webkit-input-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}.jsx-3418516378::-moz-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}.jsx-3418516378:-ms-input-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}.jsx-3418516378:-moz-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdZLEFBSU0sQUFJQyxBQUdQLEFBR2EsQUFHSCxBQUdQLEFBSUgsQUFHZ0IsQUFJZixBQUlXLEFBS0MsQUFNQSxBQU1OLEFBR00sQUFJVCxBQUdRLEFBR0YsQUFHSyxBQUdNLEFBR0QsQUFHTixBQUdFLEFBR04sQUFHSSxBQUdELEFBR0YsQUFHSCxBQU9DLEFBUytCLEFBS3BDLEFBR2EsQUFNQSxBQU1BLEFBTUEsU0F4SWhCLEFBVUEsQUFhQSxDQVFNLEVBWEQsQ0ErRkQsRUEvR0ssQ0FHRixBQTRDQSxDQTRDQSxDQU9BLENBdEdOLEFBZ0JTLEdBSEcsQUEyQnlDLEFBTUQsQUFTNUMsQ0FnRUcsQUFNQSxBQU1BLEFBTUEsRUE5R0wsQ0FJQSxDQVhELE9BaEJJLEFBNEZBLENBT0QsTUFoREMsQ0E1QkYsR0E2RkMsQUFNQSxBQU1BLEFBTUEsQ0EzQlQsSUE1RUUsSUFxRVEsRUFRUixNQTdFQyxFQXNGTyxBQU1BLEFBTUEsQUFNQSxJQTNCUCxDQWhETyxHQTJCQyxFQWpDUCxDQUdRLEdBMkJDLE1BckJFLENBcEJULENBTkcsT0F5Q0MsSUFITSxFQUhGLEVBNUJOLElBTkEsSUEyQ00sTUFmTyxJQXRCWixJQU5BLEFBK0JXLFFBd0JkLGdCQUNFLElBT0MsVUFnQkUsQUFNQSxBQU1BLEFBTUEsSUF6Q0YsS0FRRCxrQkFDRyxxQkFBQyIsImZpbGUiOiJnbG9iYWwuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AvKiBtaW5pcmVzZXQuY3NzIHYwLjAuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvbWluaXJlc2V0LmNzcyAqL1xuaHRtbCxib2R5LHAsb2wsdWwsbGksZGwsZHQsZGQsYmxvY2txdW90ZSxmaWd1cmUsZmllbGRzZXQsbGVnZW5kLHRleHRhcmVhLHByZSxpZnJhbWUsaHIsaDEsaDIsaDMsaDQsaDUsaDZ7bWFyZ2luOjA7cGFkZGluZzowfWgxLGgyLGgzLGg0LGg1LGg2e2ZvbnQtc2l6ZToxMDAlO2ZvbnQtd2VpZ2h0Om5vcm1hbH11bHtsaXN0LXN0eWxlOm5vbmV9YnV0dG9uLGlucHV0LHNlbGVjdCx0ZXh0YXJlYXttYXJnaW46MH1odG1se2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLCo6YmVmb3JlLCo6YWZ0ZXJ7Ym94LXNpemluZzppbmhlcml0fWltZyxlbWJlZCxpZnJhbWUsb2JqZWN0LGF1ZGlvLHZpZGVve2hlaWdodDphdXRvO21heC13aWR0aDoxMDAlfWlmcmFtZXtib3JkZXI6MH10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH10ZCx0aHtwYWRkaW5nOjA7dGV4dC1hbGlnbjpsZWZ0fWF7dGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiBibGFjazt9XG4vKiBmb250IGZhY2UgZGVjbGFyYXRpb25zICovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBZGloYXVzXCI7XG4gIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0FkaWhhdXNESU4tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvQWRpaGF1c0RJTi1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiQWRpaGF1c1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ybncge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG59XG5cbi5ydyB7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG5cbi5jbncge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbi5qY3NiIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uamNzYSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uamNjIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5qY2ZlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmFpYyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5haWZzIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5hc2ZzIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmFzZmUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIGxldHRlci1zcGFjaW5nOiAuMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAxLjZyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBsaW5lLWhlaWdodDogMi42cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLjJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XG59XG5cbi5tb2NrdXAge1xuICBib3gtc2hhZG93OiAxcHggNXB4IDQ4cHggLTdweCByZ2JhKDAsMCwwLDAuMjQpO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC4yNCk7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC42cHhcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuMjQpO1xuICBmb250LWZhbWlseTogXCJBZGloYXVzXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAuNnB4XG59XG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC4yNCk7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC42cHhcbn1cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC4yNCk7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC42cHhcbn1gOyJdfQ== */\n/*@ sourceURL=global.scss */';
_defaultExport.__scopedHash = '3418516378';
exports.default = _defaultExport;

/***/ }),

/***/ "./pages/_global.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/pages/_global.js";

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _global = __webpack_require__("./global.scss");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    props.children,
    _react2.default.createElement(_style2.default, {
      styleId: _global2.default.__hash,
      css: _global2.default
    })
  );
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

var _global = __webpack_require__("./pages/_global.js");

var _global2 = _interopRequireDefault(_global);

var _navigation = __webpack_require__("./components/navigation.js");

var _navigation2 = _interopRequireDefault(_navigation);

var _hero = __webpack_require__("./components/hero.js");

var _hero2 = _interopRequireDefault(_hero);

var _howItWorks = __webpack_require__("./components/how-it-works.js");

var _howItWorks2 = _interopRequireDefault(_howItWorks);

var _adikey = __webpack_require__("./components/adikey.js");

var _adikey2 = _interopRequireDefault(_adikey);

var _newsletter = __webpack_require__("./components/newsletter.js");

var _newsletter2 = _interopRequireDefault(_newsletter);

var _footer = __webpack_require__("./components/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _index = __webpack_require__("./pages/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _global2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        _react2.default.createElement(
          _head2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          _react2.default.createElement(
            "title",
            {
              className: "jsx-" + _index2.default.__scopedHash,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            "Home"
          )
        ),
        _react2.default.createElement(_navigation2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        _react2.default.createElement(_hero2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        _react2.default.createElement(_howItWorks2.default, { title: "How it works", description: "Start by scanning your environment.", __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }),
        _react2.default.createElement(_adikey2.default, { title: "Meet the match", description: "Start by scanning the your environment.", __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }),
        _react2.default.createElement(_newsletter2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }),
        _react2.default.createElement(_footer2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }),
        _react2.default.createElement(_style2.default, {
          styleId: _index2.default.__scopedHash,
          css: _index2.default.__scoped
        })
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ "./pages/index.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCIiwiZmlsZSI6InBhZ2VzL2luZGV4LnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL0ZyZW5jaXMvRG9jdW1lbnRzL2FkaWRhcy1oYWNrYXRob24vYWRpZGFzLWhhY2thdGhvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgZGl2IHtcbn1cbmA7Il19 */\n/*@ sourceURL=pages/index.scss */');

_defaultExport.__hash = '599194460';
_defaultExport.__scoped = '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCIiwiZmlsZSI6InBhZ2VzL2luZGV4LnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL0ZyZW5jaXMvRG9jdW1lbnRzL2FkaWRhcy1oYWNrYXRob24vYWRpZGFzLWhhY2thdGhvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgZGl2IHtcbn1cbmA7Il19 */\n/*@ sourceURL=pages/index.scss */';
_defaultExport.__scopedHash = '201039581';
exports.default = _defaultExport;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map