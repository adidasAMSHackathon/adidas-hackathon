webpackHotUpdate(3,{

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

/***/ })

})
//# sourceMappingURL=3.169c75061f5c3818654d.hot-update.js.map