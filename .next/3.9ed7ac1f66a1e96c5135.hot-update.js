webpackHotUpdate(3,{

/***/ "./components/footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })

})
//# sourceMappingURL=3.9ed7ac1f66a1e96c5135.hot-update.js.map