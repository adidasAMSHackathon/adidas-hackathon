module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([3],{

/***/ "./components/adikey.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/adikey.js";

var _style = __webpack_require__("./node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.js");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _section = __webpack_require__("./components/section.scss");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {
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

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/adikey.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/footer.js";

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.js");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _section = __webpack_require__("./components/section.scss");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {
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

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/footer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/hero.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/hero.js";

var _style = __webpack_require__("./node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _hero = __webpack_require__("./components/hero.scss");

var _hero2 = _interopRequireDefault(_hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {

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

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/hero.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

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
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/how-it-works.js";

var _style = __webpack_require__("./node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.js");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _section = __webpack_require__("./components/section.scss");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {
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

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/how-it-works.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/navigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/navigation.js";

var _style = __webpack_require__("./node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _navigation = __webpack_require__("./components/navigation.scss");

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {

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

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/navigation.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

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
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/newsletter.js";

var _style = __webpack_require__("./node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.js");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _section = __webpack_require__("./components/section.scss");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {
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

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/newsletter.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/section-header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/section-header.js";

var _style = __webpack_require__("./node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__("./components/section-header.scss");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
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

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/section-header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

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

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/_global.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/pages/_global.js";

var _style = __webpack_require__("./node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _global = __webpack_require__("./global.scss");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(props) {
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

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/pages/_global.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_global")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__("./node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__("./node_modules/next/head.js");

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

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(_react2.default.Component);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

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


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map