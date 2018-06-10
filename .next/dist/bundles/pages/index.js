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
      className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw section adikey",
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

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.js");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _section = __webpack_require__("./components/section.scss");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "footer",
    { className: "flex footer", __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    "\xA9 Team wild \u2014 Adidas hackathon Amsterdam"
  );
};

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
      className: "jsx-" + _hero2.default.__scopedHash + " " + "flex cnw hero__header",
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
      { href: "#how-it-works", className: "jsx-" + _hero2.default.__scopedHash + " " + "flex cta hero__cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      _react2.default.createElement(
        "span",
        {
          className: "jsx-" + _hero2.default.__scopedHash + " " + "cta__text",
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

var _defaultExport = new String('\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVyby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQiIsImZpbGUiOiJjb21wb25lbnRzL2hlcm8uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BkaXYge1xuICBcbn1gOyJdfQ== */\n/*@ sourceURL=components/hero.scss */');

_defaultExport.__hash = '2373126934';
_defaultExport.__scoped = '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVyby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQiIsImZpbGUiOiJjb21wb25lbnRzL2hlcm8uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BkaXYge1xuICBcbn1gOyJdfQ== */\n/*@ sourceURL=components/hero.scss */';
_defaultExport.__scopedHash = '2300627095';
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

var _sectionHeader = __webpack_require__("./components/section-header.js");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _section = __webpack_require__("./components/section.scss");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "section",
    {
      className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw section how-it-works",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(_sectionHeader2.default, { title: "How it works", description: "Start by scanning your environment.", __source: {
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

var _section = __webpack_require__("./components/section.scss");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "section",
    {
      className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw section newsletter",
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
      { action: "", method: "post", className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      _react2.default.createElement(
        "div",
        {
          className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw input__group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        _react2.default.createElement(
          "label",
          { htmlFor: "email-field", className: "jsx-" + _section2.default.__scopedHash + " " + "input__label",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          "Email"
        ),
        _react2.default.createElement("input", { id: "email-field", type: "email", name: "email", className: "jsx-" + _section2.default.__scopedHash + " " + "input input__field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        })
      ),
      _react2.default.createElement(
        "div",
        {
          className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw input__group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        _react2.default.createElement("input", { type: "submit", value: "Subscribe", className: "jsx-" + _section2.default.__scopedHash + " " + "input input__submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        })
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _section2.default.__scopedHash,
      css: _section2.default.__scoped
    })
  );
};

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
      description = _ref.description;

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
          className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + "section__title",
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
        className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + "section__description",
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

var _defaultExport = new String('\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IiLCJmaWxlIjoiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9GcmVuY2lzL0RvY3VtZW50cy9hZGlkYXMtaGFja2F0aG9uL2FkaWRhcy1oYWNrYXRob24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYGRpdiB7XG4gIFxufWA7Il19 */\n/*@ sourceURL=components/section-header.scss */');

_defaultExport.__hash = '2373126934';
_defaultExport.__scoped = '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IiLCJmaWxlIjoiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9GcmVuY2lzL0RvY3VtZW50cy9hZGlkYXMtaGFja2F0aG9uL2FkaWRhcy1oYWNrYXRob24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYGRpdiB7XG4gIFxufWA7Il19 */\n/*@ sourceURL=components/section-header.scss */';
_defaultExport.__scopedHash = '2300627095';
exports.default = _defaultExport;

/***/ }),

/***/ "./components/section.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQiIsImZpbGUiOiJjb21wb25lbnRzL3NlY3Rpb24uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BkaXYge1xuICBcbn1gOyJdfQ== */\n/*@ sourceURL=components/section.scss */');

_defaultExport.__hash = '2373126934';
_defaultExport.__scoped = '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQiIsImZpbGUiOiJjb21wb25lbnRzL3NlY3Rpb24uc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BkaXYge1xuICBcbn1gOyJdfQ== */\n/*@ sourceURL=components/section.scss */';
_defaultExport.__scopedHash = '2300627095';
exports.default = _defaultExport;

/***/ }),

/***/ "./global.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Regular.woff") format("woff");font-weight:normal;font-style:normal;}@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Medium.woff") format("woff");font-weight:500;font-style:normal;}html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}ul{list-style:none;}button,input,select,textarea{margin:0;}html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}img,embed,iframe,object,audio,video{height:auto;max-width:100%;}iframe{border:0;}table{border-collapse:collapse;border-spacing:0;}td,th{padding:0;text-align:left;}html{font-size:62.5%;}body{font-family:"Adihaus";font-weight:normal;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.rnw{-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.rw{-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}.cnw{-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.jcsb{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.jcsa{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.jcc{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.jcfe{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.aic{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.aifs{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.asfs{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.asfe{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdZLEFBSU0sQUFJQyxBQUdQLEFBR2EsQUFHSCxBQUdQLEFBSUgsQUFHZ0IsQUFJZixBQUtZLEFBTUEsQUFNTixBQUdNLEFBSVQsQUFHUSxBQUdGLEFBR0ssQUFHTSxBQUdELEFBR04sQUFHRSxBQUdOLEFBR0ksQUFHRCxBQUdGLFNBdkZWLEFBVUEsQUFhQSxDQVFNLEVBWEQsR0FoQkksQ0FHRixBQXdDQSxHQS9DTixBQWdCUyxHQUhHLEFBdUJ5QyxBQU1ELEFBUzVDLEdBeEJGLENBSUEsQ0FYRCxPQWhCSSxPQStDQSxDQXhCRiwyQkFpQ0UsR0EyQkMsRUFqQ1AsQ0FHUSxHQTJCQyxNQXJCRSxDQXBCVCxDQU5HLE9BeUNDLElBSE0sRUFIRixFQTVCTixJQU5BLElBMkNNLE1BZk8sSUF0QlosSUFOQSxBQStCVyIsImZpbGUiOiJnbG9iYWwuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AvKiBtaW5pcmVzZXQuY3NzIHYwLjAuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvbWluaXJlc2V0LmNzcyAqL1xuaHRtbCxib2R5LHAsb2wsdWwsbGksZGwsZHQsZGQsYmxvY2txdW90ZSxmaWd1cmUsZmllbGRzZXQsbGVnZW5kLHRleHRhcmVhLHByZSxpZnJhbWUsaHIsaDEsaDIsaDMsaDQsaDUsaDZ7bWFyZ2luOjA7cGFkZGluZzowfWgxLGgyLGgzLGg0LGg1LGg2e2ZvbnQtc2l6ZToxMDAlO2ZvbnQtd2VpZ2h0Om5vcm1hbH11bHtsaXN0LXN0eWxlOm5vbmV9YnV0dG9uLGlucHV0LHNlbGVjdCx0ZXh0YXJlYXttYXJnaW46MH1odG1se2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLCo6YmVmb3JlLCo6YWZ0ZXJ7Ym94LXNpemluZzppbmhlcml0fWltZyxlbWJlZCxpZnJhbWUsb2JqZWN0LGF1ZGlvLHZpZGVve2hlaWdodDphdXRvO21heC13aWR0aDoxMDAlfWlmcmFtZXtib3JkZXI6MH10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH10ZCx0aHtwYWRkaW5nOjA7dGV4dC1hbGlnbjpsZWZ0fVxuLyogZm9udCBmYWNlIGRlY2xhcmF0aW9ucyAqL1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWRpaGF1c1wiO1xuICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9BZGloYXVzRElOLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBZGloYXVzXCI7XG4gIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0FkaWhhdXNESU4tTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucm53IHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xufVxuXG4ucncge1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4uY253IHtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG4uamNzYiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmpjc2Ege1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmpjYyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uamNmZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5haWMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWlmcyB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uYXNmcyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5hc2ZlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59YDsiXX0= */\n/*@ sourceURL=global.scss */');

_defaultExport.__hash = '1925871890';
_defaultExport.__scoped = '@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Regular.woff") format("woff");font-weight:normal;font-style:normal;}@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Medium.woff") format("woff");font-weight:500;font-style:normal;}html.jsx-3392165523,body.jsx-3392165523,p.jsx-3392165523,ol.jsx-3392165523,ul.jsx-3392165523,li.jsx-3392165523,dl.jsx-3392165523,dt.jsx-3392165523,dd.jsx-3392165523,blockquote.jsx-3392165523,figure.jsx-3392165523,fieldset.jsx-3392165523,legend.jsx-3392165523,textarea.jsx-3392165523,pre.jsx-3392165523,iframe.jsx-3392165523,hr.jsx-3392165523,h1.jsx-3392165523,h2.jsx-3392165523,h3.jsx-3392165523,h4.jsx-3392165523,h5.jsx-3392165523,h6.jsx-3392165523{margin:0;padding:0;}h1.jsx-3392165523,h2.jsx-3392165523,h3.jsx-3392165523,h4.jsx-3392165523,h5.jsx-3392165523,h6.jsx-3392165523{font-size:100%;font-weight:normal;}ul.jsx-3392165523{list-style:none;}button.jsx-3392165523,input.jsx-3392165523,select.jsx-3392165523,textarea.jsx-3392165523{margin:0;}html.jsx-3392165523{box-sizing:border-box;}*.jsx-3392165523,*.jsx-3392165523:before,*.jsx-3392165523:after{box-sizing:inherit;}img.jsx-3392165523,embed.jsx-3392165523,iframe.jsx-3392165523,object.jsx-3392165523,audio.jsx-3392165523,video.jsx-3392165523{height:auto;max-width:100%;}iframe.jsx-3392165523{border:0;}table.jsx-3392165523{border-collapse:collapse;border-spacing:0;}td.jsx-3392165523,th.jsx-3392165523{padding:0;text-align:left;}html.jsx-3392165523{font-size:62.5%;}body.jsx-3392165523{font-family:"Adihaus";font-weight:normal;}.flex.jsx-3392165523{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.rnw.jsx-3392165523{-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.rw.jsx-3392165523{-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}.cnw.jsx-3392165523{-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.jcsb.jsx-3392165523{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.jcsa.jsx-3392165523{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.jcc.jsx-3392165523{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.jcfe.jsx-3392165523{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.aic.jsx-3392165523{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.aifs.jsx-3392165523{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.asfs.jsx-3392165523{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}.asfe.jsx-3392165523{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdZLEFBSU0sQUFJQyxBQUdQLEFBR2EsQUFHSCxBQUdQLEFBSUgsQUFHZ0IsQUFJZixBQUtZLEFBTUEsQUFNTixBQUdNLEFBSVQsQUFHUSxBQUdGLEFBR0ssQUFHTSxBQUdELEFBR04sQUFHRSxBQUdOLEFBR0ksQUFHRCxBQUdGLFNBdkZWLEFBVUEsQUFhQSxDQVFNLEVBWEQsR0FoQkksQ0FHRixBQXdDQSxHQS9DTixBQWdCUyxHQUhHLEFBdUJ5QyxBQU1ELEFBUzVDLEdBeEJGLENBSUEsQ0FYRCxPQWhCSSxPQStDQSxDQXhCRiwyQkFpQ0UsR0EyQkMsRUFqQ1AsQ0FHUSxHQTJCQyxNQXJCRSxDQXBCVCxDQU5HLE9BeUNDLElBSE0sRUFIRixFQTVCTixJQU5BLElBMkNNLE1BZk8sSUF0QlosSUFOQSxBQStCVyIsImZpbGUiOiJnbG9iYWwuc2NzcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRnJlbmNpcy9Eb2N1bWVudHMvYWRpZGFzLWhhY2thdGhvbi9hZGlkYXMtaGFja2F0aG9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AvKiBtaW5pcmVzZXQuY3NzIHYwLjAuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvbWluaXJlc2V0LmNzcyAqL1xuaHRtbCxib2R5LHAsb2wsdWwsbGksZGwsZHQsZGQsYmxvY2txdW90ZSxmaWd1cmUsZmllbGRzZXQsbGVnZW5kLHRleHRhcmVhLHByZSxpZnJhbWUsaHIsaDEsaDIsaDMsaDQsaDUsaDZ7bWFyZ2luOjA7cGFkZGluZzowfWgxLGgyLGgzLGg0LGg1LGg2e2ZvbnQtc2l6ZToxMDAlO2ZvbnQtd2VpZ2h0Om5vcm1hbH11bHtsaXN0LXN0eWxlOm5vbmV9YnV0dG9uLGlucHV0LHNlbGVjdCx0ZXh0YXJlYXttYXJnaW46MH1odG1se2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLCo6YmVmb3JlLCo6YWZ0ZXJ7Ym94LXNpemluZzppbmhlcml0fWltZyxlbWJlZCxpZnJhbWUsb2JqZWN0LGF1ZGlvLHZpZGVve2hlaWdodDphdXRvO21heC13aWR0aDoxMDAlfWlmcmFtZXtib3JkZXI6MH10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH10ZCx0aHtwYWRkaW5nOjA7dGV4dC1hbGlnbjpsZWZ0fVxuLyogZm9udCBmYWNlIGRlY2xhcmF0aW9ucyAqL1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQWRpaGF1c1wiO1xuICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9BZGloYXVzRElOLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBZGloYXVzXCI7XG4gIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0FkaWhhdXNESU4tTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFkaWhhdXNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucm53IHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xufVxuXG4ucncge1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4uY253IHtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG4uamNzYiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmpjc2Ege1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmpjYyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uamNmZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5haWMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWlmcyB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uYXNmcyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5hc2ZlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59YDsiXX0= */\n/*@ sourceURL=global.scss */';
_defaultExport.__scopedHash = '3392165523';
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