webpackHotUpdate(3,{

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

var SectionHeader = function SectionHeader(title, description) {
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

var _default = SectionHeader;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SectionHeader, "SectionHeader", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/section-header.js");
  reactHotLoader.register(_default, "default", "/Users/Frencis/Documents/adidas-hackathon/adidas-hackathon/components/section-header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.360449a6e8bf1c147fb3.hot-update.js.map