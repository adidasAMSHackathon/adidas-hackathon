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
      className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex rnw nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(
      "div",
      {
        className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex hamburger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      _react2.default.createElement(
        "svg",
        {
          className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex cnw jcsb menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        _react2.default.createElement("line", { x1: "0%", y1: "10%", x2: "100%", y2: "10%", className: "jsx-" + _navigation2.default.__scopedHash + " " + "menu-line line-top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }),
        _react2.default.createElement("line", { x1: "0%", y1: "50%", x2: "100%", y2: "50%", className: "jsx-" + _navigation2.default.__scopedHash + " " + "menu-line line-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }),
        _react2.default.createElement("line", { x1: "0%", y1: "90%", x2: "100%", y2: "90%", className: "jsx-" + _navigation2.default.__scopedHash + " " + "menu-line line-bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        })
      ),
      _react2.default.createElement("img", { src: "/static/images/adidas-logo.png", alt: "adidas logo", className: "jsx-" + _navigation2.default.__scopedHash + " " + "nav-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }),
      _react2.default.createElement(
        "div",
        {
          className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex search",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        _react2.default.createElement("img", { src: "/static/svg/search.svg", alt: "search icon", className: "jsx-" + _navigation2.default.__scopedHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        })
      )
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

var _defaultExport = new String('div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px;background-color:crimson;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVnQiwwRUFDQSxhQUNZLHlCQUNQLGtCQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2aWdhdGlvbi5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9GcmVuY2lzL0RvY3VtZW50cy9hZGlkYXMtaGFja2F0aG9uL2FkaWRhcy1oYWNrYXRob24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYEBpbXBvcnQgJ3ZhcnMuc2Nzcyc7XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuYDsiXX0= */\n/*@ sourceURL=components/navigation.scss */');

_defaultExport.__hash = '4254327121';
_defaultExport.__scoped = 'div.jsx-2415521104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px;background-color:crimson;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVnQiwwRUFDQSxhQUNZLHlCQUNQLGtCQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2aWdhdGlvbi5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9GcmVuY2lzL0RvY3VtZW50cy9hZGlkYXMtaGFja2F0aG9uL2FkaWRhcy1oYWNrYXRob24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYEBpbXBvcnQgJ3ZhcnMuc2Nzcyc7XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuYDsiXX0= */\n/*@ sourceURL=components/navigation.scss */';
_defaultExport.__scopedHash = '2415521104';
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

var _defaultExport = new String('html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}ul{list-style:none;}button,input,select,textarea{margin:0;}html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}img,embed,iframe,object,audio,video{height:auto;max-width:100%;}iframe{border:0;}table{border-collapse:collapse;border-spacing:0;}td,th{padding:0;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdZLEFBSU0sQUFJQyxBQUdQLEFBR2EsQUFHSCxBQUdQLEFBSUgsQUFHZ0IsQUFJZixTQTlCQSxBQVVBLEFBYUEsQ0FRTSxFQVhELEdBaEJJLENBR0YsR0FQTixBQWdCUyxHQUhHLEdBY04sQ0FJQSxDQVhELE9BaEJJLFFBdUJGIiwiZmlsZSI6Imdsb2JhbC5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9GcmVuY2lzL0RvY3VtZW50cy9hZGlkYXMtaGFja2F0aG9uL2FkaWRhcy1oYWNrYXRob24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC8qIG1pbmlyZXNldC5jc3MgdjAuMC4zIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL2pndGhtcy9taW5pcmVzZXQuY3NzICovXG5odG1sLGJvZHkscCxvbCx1bCxsaSxkbCxkdCxkZCxibG9ja3F1b3RlLGZpZ3VyZSxmaWVsZHNldCxsZWdlbmQsdGV4dGFyZWEscHJlLGlmcmFtZSxocixoMSxoMixoMyxoNCxoNSxoNnttYXJnaW46MDtwYWRkaW5nOjB9aDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC1zaXplOjEwMCU7Zm9udC13ZWlnaHQ6bm9ybWFsfXVse2xpc3Qtc3R5bGU6bm9uZX1idXR0b24saW5wdXQsc2VsZWN0LHRleHRhcmVhe21hcmdpbjowfWh0bWx7Ym94LXNpemluZzpib3JkZXItYm94fSosKjpiZWZvcmUsKjphZnRlcntib3gtc2l6aW5nOmluaGVyaXR9aW1nLGVtYmVkLGlmcmFtZSxvYmplY3QsYXVkaW8sdmlkZW97aGVpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCV9aWZyYW1le2JvcmRlcjowfXRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowfXRkLHRoe3BhZGRpbmc6MDt0ZXh0LWFsaWduOmxlZnR9XG4vKiBmb250IGZhY2UgZGVjbGFyYXRpb25zICovXG5gOyJdfQ== */\n/*@ sourceURL=global.scss */');

_defaultExport.__hash = '129738968';
_defaultExport.__scoped = 'html.jsx-1517833689,body.jsx-1517833689,p.jsx-1517833689,ol.jsx-1517833689,ul.jsx-1517833689,li.jsx-1517833689,dl.jsx-1517833689,dt.jsx-1517833689,dd.jsx-1517833689,blockquote.jsx-1517833689,figure.jsx-1517833689,fieldset.jsx-1517833689,legend.jsx-1517833689,textarea.jsx-1517833689,pre.jsx-1517833689,iframe.jsx-1517833689,hr.jsx-1517833689,h1.jsx-1517833689,h2.jsx-1517833689,h3.jsx-1517833689,h4.jsx-1517833689,h5.jsx-1517833689,h6.jsx-1517833689{margin:0;padding:0;}h1.jsx-1517833689,h2.jsx-1517833689,h3.jsx-1517833689,h4.jsx-1517833689,h5.jsx-1517833689,h6.jsx-1517833689{font-size:100%;font-weight:normal;}ul.jsx-1517833689{list-style:none;}button.jsx-1517833689,input.jsx-1517833689,select.jsx-1517833689,textarea.jsx-1517833689{margin:0;}html.jsx-1517833689{box-sizing:border-box;}*.jsx-1517833689,*.jsx-1517833689:before,*.jsx-1517833689:after{box-sizing:inherit;}img.jsx-1517833689,embed.jsx-1517833689,iframe.jsx-1517833689,object.jsx-1517833689,audio.jsx-1517833689,video.jsx-1517833689{height:auto;max-width:100%;}iframe.jsx-1517833689{border:0;}table.jsx-1517833689{border-collapse:collapse;border-spacing:0;}td.jsx-1517833689,th.jsx-1517833689{padding:0;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdZLEFBSU0sQUFJQyxBQUdQLEFBR2EsQUFHSCxBQUdQLEFBSUgsQUFHZ0IsQUFJZixTQTlCQSxBQVVBLEFBYUEsQ0FRTSxFQVhELEdBaEJJLENBR0YsR0FQTixBQWdCUyxHQUhHLEdBY04sQ0FJQSxDQVhELE9BaEJJLFFBdUJGIiwiZmlsZSI6Imdsb2JhbC5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9GcmVuY2lzL0RvY3VtZW50cy9hZGlkYXMtaGFja2F0aG9uL2FkaWRhcy1oYWNrYXRob24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC8qIG1pbmlyZXNldC5jc3MgdjAuMC4zIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL2pndGhtcy9taW5pcmVzZXQuY3NzICovXG5odG1sLGJvZHkscCxvbCx1bCxsaSxkbCxkdCxkZCxibG9ja3F1b3RlLGZpZ3VyZSxmaWVsZHNldCxsZWdlbmQsdGV4dGFyZWEscHJlLGlmcmFtZSxocixoMSxoMixoMyxoNCxoNSxoNnttYXJnaW46MDtwYWRkaW5nOjB9aDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC1zaXplOjEwMCU7Zm9udC13ZWlnaHQ6bm9ybWFsfXVse2xpc3Qtc3R5bGU6bm9uZX1idXR0b24saW5wdXQsc2VsZWN0LHRleHRhcmVhe21hcmdpbjowfWh0bWx7Ym94LXNpemluZzpib3JkZXItYm94fSosKjpiZWZvcmUsKjphZnRlcntib3gtc2l6aW5nOmluaGVyaXR9aW1nLGVtYmVkLGlmcmFtZSxvYmplY3QsYXVkaW8sdmlkZW97aGVpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCV9aWZyYW1le2JvcmRlcjowfXRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowfXRkLHRoe3BhZGRpbmc6MDt0ZXh0LWFsaWduOmxlZnR9XG4vKiBmb250IGZhY2UgZGVjbGFyYXRpb25zICovXG5gOyJdfQ== */\n/*@ sourceURL=global.scss */';
_defaultExport.__scopedHash = '1517833689';
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