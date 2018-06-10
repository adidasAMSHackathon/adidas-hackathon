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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _global = __webpack_require__(4);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "div",
    null,
    props.children,
    _react2.default.createElement(_style2.default, {
      styleId: _global2.default.__hash,
      css: _global2.default
    })
  );
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaultExport = ['@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Regular.woff") format("woff");font-weight:normal;font-style:normal;}', '@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Medium.woff") format("woff");font-weight:500;font-style:normal;}', 'html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}', 'h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}', 'ul{list-style:none;}', 'button,input,select,textarea{margin:0;}', 'html{box-sizing:border-box;}', '*,*:before,*:after{box-sizing:inherit;}', 'img,embed,iframe,object,audio,video{height:auto;max-width:100%;}', 'iframe{border:0;}', 'table{border-collapse:collapse;border-spacing:0;}', 'td,th{padding:0;text-align:left;}', 'a{-webkit-text-decoration:none;text-decoration:none;color:black;}', 'html{font-size:62.5%;}', 'body{font-family:"Adihaus";font-weight:normal;}', '.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.rnw{-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}', '.rw{-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}', '.cnw{-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}', '.jcsb{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}', '.jcsa{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}', '.jcc{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.jcfe{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}', '.aic{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.aifs{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}', '.asfs{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}', '.asfe{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}', 'h1{font-size:2.4rem;line-height:3rem;-webkit-letter-spacing:.2px;-moz-letter-spacing:.2px;-ms-letter-spacing:.2px;letter-spacing:.2px;font-weight:500;text-align:center;}', 'p{margin-top:1.6rem;font-size:1.6rem;line-height:2.6rem;-webkit-letter-spacing:.2px;-moz-letter-spacing:.2px;-ms-letter-spacing:.2px;letter-spacing:.2px;font-weight:normal;text-align:center;margin-bottom:3.5rem;max-width:85%;}', '.mockup{box-shadow:1px 5px 48px -7px rgba(0,0,0,0.24);width:60%;height:auto;}', '.hide{display:none;}', '::-webkit-input-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}', '::-moz-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}', ':-ms-input-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}', ':-moz-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}'];
_defaultExport.__hash = '1227430576';
_defaultExport.__scoped = ['@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Regular.woff") format("woff");font-weight:normal;font-style:normal;}', '@font-face{font-family:"Adihaus";src:url("/static/fonts/AdihausDIN-Medium.woff") format("woff");font-weight:500;font-style:normal;}', 'html.jsx-1872418545,body.jsx-1872418545,p.jsx-1872418545,ol.jsx-1872418545,ul.jsx-1872418545,li.jsx-1872418545,dl.jsx-1872418545,dt.jsx-1872418545,dd.jsx-1872418545,blockquote.jsx-1872418545,figure.jsx-1872418545,fieldset.jsx-1872418545,legend.jsx-1872418545,textarea.jsx-1872418545,pre.jsx-1872418545,iframe.jsx-1872418545,hr.jsx-1872418545,h1.jsx-1872418545,h2.jsx-1872418545,h3.jsx-1872418545,h4.jsx-1872418545,h5.jsx-1872418545,h6.jsx-1872418545{margin:0;padding:0;}', 'h1.jsx-1872418545,h2.jsx-1872418545,h3.jsx-1872418545,h4.jsx-1872418545,h5.jsx-1872418545,h6.jsx-1872418545{font-size:100%;font-weight:normal;}', 'ul.jsx-1872418545{list-style:none;}', 'button.jsx-1872418545,input.jsx-1872418545,select.jsx-1872418545,textarea.jsx-1872418545{margin:0;}', 'html.jsx-1872418545{box-sizing:border-box;}', '*.jsx-1872418545,*.jsx-1872418545:before,*.jsx-1872418545:after{box-sizing:inherit;}', 'img.jsx-1872418545,embed.jsx-1872418545,iframe.jsx-1872418545,object.jsx-1872418545,audio.jsx-1872418545,video.jsx-1872418545{height:auto;max-width:100%;}', 'iframe.jsx-1872418545{border:0;}', 'table.jsx-1872418545{border-collapse:collapse;border-spacing:0;}', 'td.jsx-1872418545,th.jsx-1872418545{padding:0;text-align:left;}', 'a.jsx-1872418545{-webkit-text-decoration:none;text-decoration:none;color:black;}', 'html.jsx-1872418545{font-size:62.5%;}', 'body.jsx-1872418545{font-family:"Adihaus";font-weight:normal;}', '.flex.jsx-1872418545{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.rnw.jsx-1872418545{-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}', '.rw.jsx-1872418545{-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}', '.cnw.jsx-1872418545{-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}', '.jcsb.jsx-1872418545{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}', '.jcsa.jsx-1872418545{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}', '.jcc.jsx-1872418545{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.jcfe.jsx-1872418545{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}', '.aic.jsx-1872418545{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.aifs.jsx-1872418545{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}', '.asfs.jsx-1872418545{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}', '.asfe.jsx-1872418545{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}', 'h1.jsx-1872418545{font-size:2.4rem;line-height:3rem;-webkit-letter-spacing:.2px;-moz-letter-spacing:.2px;-ms-letter-spacing:.2px;letter-spacing:.2px;font-weight:500;text-align:center;}', 'p.jsx-1872418545{margin-top:1.6rem;font-size:1.6rem;line-height:2.6rem;-webkit-letter-spacing:.2px;-moz-letter-spacing:.2px;-ms-letter-spacing:.2px;letter-spacing:.2px;font-weight:normal;text-align:center;margin-bottom:3.5rem;max-width:85%;}', '.mockup.jsx-1872418545{box-shadow:1px 5px 48px -7px rgba(0,0,0,0.24);width:60%;height:auto;}', '.hide.jsx-1872418545{display:none;}', '.jsx-1872418545::-webkit-input-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}', '.jsx-1872418545::-moz-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}', '.jsx-1872418545:-ms-input-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}', '.jsx-1872418545:-moz-placeholder{color:rgba(0,0,0,0.24);font-family:"Adihaus";font-weight:normal;-webkit-letter-spacing:.6px;-moz-letter-spacing:.6px;-ms-letter-spacing:.6px;letter-spacing:.6px;}'];
_defaultExport.__scopedHash = '1872418545';
exports.default = _defaultExport;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__(24);

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var title = _ref.title,
      description = _ref.description,
      invert = _ref.invert;

  return _react2.default.createElement(
    "div",
    {
      className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + "flex cnw aic section__header__wrapper"
    },
    _react2.default.createElement(
      "header",
      {
        className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + "flex cnw section__header"
      },
      _react2.default.createElement(
        "h1",
        {
          className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + ((invert ? "section__title section__title--white" : "section__title") || "")
        },
        title
      )
    ),
    _react2.default.createElement(
      "p",
      {
        className: "jsx-" + _sectionHeader2.default.__scopedHash + " " + ((invert ? "section__description section__description--white" : "section__description") || "")
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaultExport = ['.section{margin:0 0 5.4rem;}'];
_defaultExport.__hash = '2939011203';
_defaultExport.__scoped = ['.section.jsx-3547183266{margin:0 0 5.4rem;}'];
_defaultExport.__scopedHash = '3547183266';
exports.default = _defaultExport;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(2);

var _head2 = _interopRequireDefault(_head);

var _global = __webpack_require__(3);

var _global2 = _interopRequireDefault(_global);

var _navigation = __webpack_require__(18);

var _navigation2 = _interopRequireDefault(_navigation);

var _hero = __webpack_require__(20);

var _hero2 = _interopRequireDefault(_hero);

var _howItWorks = __webpack_require__(22);

var _howItWorks2 = _interopRequireDefault(_howItWorks);

var _adikey = __webpack_require__(26);

var _adikey2 = _interopRequireDefault(_adikey);

var _newsletter = __webpack_require__(27);

var _newsletter2 = _interopRequireDefault(_newsletter);

var _footer = __webpack_require__(29);

var _footer2 = _interopRequireDefault(_footer);

var _index = __webpack_require__(31);

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
        null,
        _react2.default.createElement(
          _head2.default,
          null,
          _react2.default.createElement(
            "title",
            {
              className: "jsx-" + _index2.default.__scopedHash
            },
            "Home"
          )
        ),
        _react2.default.createElement(_navigation2.default, null),
        _react2.default.createElement(_hero2.default, null),
        _react2.default.createElement(_howItWorks2.default, { title: "How it works", description: "Start by scanning your environment." }),
        _react2.default.createElement(_adikey2.default, { title: "Meet the match", description: "Start by scanning the your environment." }),
        _react2.default.createElement(_newsletter2.default, null),
        _react2.default.createElement(_footer2.default, null),
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _navigation = __webpack_require__(19);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  return _react2.default.createElement(
    "nav",
    {
      className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex rnw aic jcsb nav"
    },
    _react2.default.createElement(
      "div",
      {
        className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex svg__container hamburger"
      },
      _react2.default.createElement("img", { src: "/static/svg/menu.svg", alt: "hamburger icon", className: "jsx-" + _navigation2.default.__scopedHash + " " + "svg menu-icon"
      })
    ),
    _react2.default.createElement("img", { src: "/static/images/adidas-logo.png", alt: "adidas logo", className: "jsx-" + _navigation2.default.__scopedHash + " " + "nav-logo"
    }),
    _react2.default.createElement(
      "div",
      {
        className: "jsx-" + _navigation2.default.__scopedHash + " " + "flex svg__container search"
      },
      _react2.default.createElement("img", { src: "/static/svg/search.svg", alt: "search icon", className: "jsx-" + _navigation2.default.__scopedHash + " " + "svg search-icon"
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: _navigation2.default.__scopedHash,
      css: _navigation2.default.__scoped
    })
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaultExport = ['.nav{position:fixed;top:0;left:0;right:0;height:6.4rem;width:100%;background-color:black;z-index:9999999;}', '.nav-logo{width:4.5rem;height:3rem;}', '.svg__container{height:100%;}', '.hamburger{border-right:1px solid rgba(255,255,255,0.4);}', '.search{border-left:1px solid rgba(255,255,255,0.4);}', '.svg{padding:0 3.2rem;max-width:unset;}'];
_defaultExport.__hash = '2349588700';
_defaultExport.__scoped = ['.nav.jsx-1190257885{position:fixed;top:0;left:0;right:0;height:6.4rem;width:100%;background-color:black;z-index:9999999;}', '.nav-logo.jsx-1190257885{width:4.5rem;height:3rem;}', '.svg__container.jsx-1190257885{height:100%;}', '.hamburger.jsx-1190257885{border-right:1px solid rgba(255,255,255,0.4);}', '.search.jsx-1190257885{border-left:1px solid rgba(255,255,255,0.4);}', '.svg.jsx-1190257885{padding:0 3.2rem;max-width:unset;}'];
_defaultExport.__scopedHash = '1190257885';
exports.default = _defaultExport;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hero = __webpack_require__(21);

var _hero2 = _interopRequireDefault(_hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  return _react2.default.createElement(
    "header",
    {
      className: "jsx-" + _hero2.default.__scopedHash + " " + "flex cnw jcc aic hero__header"
    },
    _react2.default.createElement(
      "h1",
      {
        className: "jsx-" + _hero2.default.__scopedHash + " " + "hero__header__title"
      },
      "Empowering users to create"
    ),
    _react2.default.createElement(
      "a",
      { href: "#how-it-works", className: "jsx-" + _hero2.default.__scopedHash + " " + "flex jcc cta hero__cta"
      },
      _react2.default.createElement(
        "span",
        {
          className: "jsx-" + _hero2.default.__scopedHash + " " + "flex rnw jcc aic cta__text"
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaultExport = ['.hero__header{margin:6.4rem 0 5.4rem;height:65vh;background:linear-gradient(to right,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%),url(/static/images/hero.jpg) bottom center/cover no-repeat;}', '.hero__header__title{font-size:3.6rem;font-weight:500;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;line-height:4.6rem;color:white;text-align:center;max-width:85%;}', '.cta:link,.cta:visited{font-size:1.1rem;font-weight:500;text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:white;padding:2.7rem 0;background:black;width:80%;border-radius:2px;}', '.hero__cta{margin:2.8rem 0 0;}', '.cta__text::after{content:"";display:block;background:url(/static/icons/ic-arrow-16-thin.png) center center/cover no-repeat;width:2.4rem;height:100%;margin-left:1.6rem;}'];
_defaultExport.__hash = '1001948188';
_defaultExport.__scoped = ['.hero__header.jsx-1922512669{margin:6.4rem 0 5.4rem;height:65vh;background:linear-gradient(to right,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%),url(/static/images/hero.jpg) bottom center/cover no-repeat;}', '.hero__header__title.jsx-1922512669{font-size:3.6rem;font-weight:500;-webkit-letter-spacing:.4px;-moz-letter-spacing:.4px;-ms-letter-spacing:.4px;letter-spacing:.4px;line-height:4.6rem;color:white;text-align:center;max-width:85%;}', '.cta.jsx-1922512669:link,.cta.jsx-1922512669:visited{font-size:1.1rem;font-weight:500;text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:white;padding:2.7rem 0;background:black;width:80%;border-radius:2px;}', '.hero__cta.jsx-1922512669{margin:2.8rem 0 0;}', '.cta__text.jsx-1922512669::after{content:"";display:block;background:url(/static/icons/ic-arrow-16-thin.png) center center/cover no-repeat;width:2.4rem;height:100%;margin-left:1.6rem;}'];
_defaultExport.__scopedHash = '1922512669';
exports.default = _defaultExport;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _slider = __webpack_require__(23);

var _slider2 = _interopRequireDefault(_slider);

var _section = __webpack_require__(6);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "section",
    {
      className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw aic section how-it-works"
    },
    _react2.default.createElement(_slider2.default, null),
    _react2.default.createElement(_style2.default, {
      styleId: _section2.default.__scopedHash,
      css: _section2.default.__scoped
    })
  );
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__(5);

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _slider = __webpack_require__(25);

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
        description: "Start by scanning your environment, drawing, texture or anything. You decide!",
        image: "/static/images/content/02.jpg"
      }, {
        description: "I-Adidas will create a shoe based on your input.",
        image: "/static/images/content/03-01.jpg"
      }, {
        description: "Enter your I-Adidas key to make it the perfect fit.",
        image: "/static/images/content/03-b.jpg"
      }]
    }, _this.handlePreviousImage = function () {
      var _this$state = _this.state,
          current = _this$state.current,
          content = _this$state.content;


      var nextCurrent = current - 1;

      if (nextCurrent < 0) {
        nextCurrent = content.length - 1;
      }

      _this.setState({ current: nextCurrent });
    }, _this.handleNextImage = function () {
      var _this$state2 = _this.state,
          current = _this$state2.current,
          content = _this$state2.content;


      var nextCurrent = current + 1;

      if (nextCurrent >= content.length - 1) {
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
          className: "jsx-" + _slider2.default.__scopedHash + " " + "flex cnw aic slider-content"
        },
        _react2.default.createElement(_sectionHeader2.default, { title: "How it works", description: content[current].description }),
        _react2.default.createElement(
          "div",
          {
            className: "jsx-" + _slider2.default.__scopedHash + " " + "flex jcc aic button button--left"
          },
          _react2.default.createElement("img", { src: "/static/icons/ic-arrow-16-thin.png", alt: "left button", onClick: this.handlePreviousImage, className: "jsx-" + _slider2.default.__scopedHash + " " + "button--left__image"
          })
        ),
        _react2.default.createElement("img", { src: content[current].image, alt: "app screen", className: "jsx-" + _slider2.default.__scopedHash + " " + "slider__image"
        }),
        _react2.default.createElement(
          "div",
          { onClick: this.handleNextImage, className: "jsx-" + _slider2.default.__scopedHash + " " + "flex jcc aic button button--right"
          },
          _react2.default.createElement("img", { src: "/static/icons/ic-arrow-16-thin.png", alt: "left button", className: "jsx-" + _slider2.default.__scopedHash + " " + "button--right__image"
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaultExport = ['.section__title--white,.section__description--white{color:white;}'];
_defaultExport.__hash = '1520444829';
_defaultExport.__scoped = ['.section__title--white.jsx-2245935900,.section__description--white.jsx-2245935900{color:white;}'];
_defaultExport.__scopedHash = '2245935900';
exports.default = _defaultExport;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaultExport = ['.slider-content{position:relative;}', '.slider__image{box-shadow:1px 5px 48px -7px rgba(0,0,0,0.24);width:60%;height:auto;}', '.button{width:46px;height:46px;background:black;border-radius:50%;position:absolute;top:50%;left:4rem;z-index:9999;}', '.button--left__image{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}', '.button--right{right:4rem;left:auto;}'];
_defaultExport.__hash = '3479538649';
_defaultExport.__scoped = ['.slider-content.jsx-983701592{position:relative;}', '.slider__image.jsx-983701592{box-shadow:1px 5px 48px -7px rgba(0,0,0,0.24);width:60%;height:auto;}', '.button.jsx-983701592{width:46px;height:46px;background:black;border-radius:50%;position:absolute;top:50%;left:4rem;z-index:9999;}', '.button--left__image.jsx-983701592{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}', '.button--right.jsx-983701592{right:4rem;left:auto;}'];
_defaultExport.__scopedHash = '983701592';
exports.default = _defaultExport;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__(5);

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _section = __webpack_require__(6);

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "section",
    {
      className: "jsx-" + _section2.default.__scopedHash + " " + "flex cnw aic section adikey"
    },
    _react2.default.createElement(_sectionHeader2.default, { title: "Meet Adidas Key", description: "With I-Adidas key you can make the shoe fit perfectly." }),
    _react2.default.createElement("video", { autoPlay: true, loop: true, muted: true, playsInline: true, src: "/static/videos/key-animation.mov", className: "jsx-" + _section2.default.__scopedHash + " " + "mockup video"
    }),
    _react2.default.createElement(_style2.default, {
      styleId: _section2.default.__scopedHash,
      css: _section2.default.__scoped
    })
  );
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sectionHeader = __webpack_require__(5);

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _newsletter = __webpack_require__(28);

var _newsletter2 = _interopRequireDefault(_newsletter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "section",
    {
      className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex cnw section newsletter"
    },
    _react2.default.createElement(_sectionHeader2.default, { title: "Newsletter", description: "Be the first one to try it out. Sign up for our newsletter.", invert: true }),
    _react2.default.createElement(
      "form",
      { method: "post", className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex cnw form"
      },
      _react2.default.createElement(
        "div",
        {
          className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex cnw input__group"
        },
        _react2.default.createElement(
          "label",
          { htmlFor: "email-field", className: "jsx-" + _newsletter2.default.__scopedHash + " " + "input__label hide"
          },
          "Email"
        ),
        _react2.default.createElement("input", { id: "email-field", type: "email", name: "email", placeholder: "hackathon@adidas.com", className: "jsx-" + _newsletter2.default.__scopedHash + " " + "input input__field"
        })
      ),
      _react2.default.createElement(
        "div",
        {
          className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex cnw input__group"
        },
        _react2.default.createElement(
          "button",
          { type: "submit", className: "jsx-" + _newsletter2.default.__scopedHash + " " + "flex jcc aic input input__submit"
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaultExport = ['.newsletter{background:black;padding:4.8rem 2.4rem;}', '.input__group+.input__group{margin:1.6rem 0 0;}', '.input{background:white;color:black;padding:2.4rem;border-radius:2px;}', '.input__field{padding:2.2rem;border:none;}', '.input__submit{background:transparent;border:1px solid white;color:white;text-transform:uppercase;font-size:1.1rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:2rem;-webkit-appearance:none;}', '.input__submit::after{content:"";display:block;background:url(/static/icons/ic-arrow-16-thin.png) center center/cover no-repeat;width:2.4rem;height:2.4rem;margin-left:1.6rem;}'];
_defaultExport.__hash = '1964918706';
_defaultExport.__scoped = ['.newsletter.jsx-3761751155{background:black;padding:4.8rem 2.4rem;}', '.input__group.jsx-3761751155+.input__group.jsx-3761751155{margin:1.6rem 0 0;}', '.input.jsx-3761751155{background:white;color:black;padding:2.4rem;border-radius:2px;}', '.input__field.jsx-3761751155{padding:2.2rem;border:none;}', '.input__submit.jsx-3761751155{background:transparent;border:1px solid white;color:white;text-transform:uppercase;font-size:1.1rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:2rem;-webkit-appearance:none;}', '.input__submit.jsx-3761751155::after{content:"";display:block;background:url(/static/icons/ic-arrow-16-thin.png) center center/cover no-repeat;width:2.4rem;height:2.4rem;margin-left:1.6rem;}'];
_defaultExport.__scopedHash = '3761751155';
exports.default = _defaultExport;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _footer = __webpack_require__(30);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "footer",
    {
      className: "jsx-" + _footer2.default.__scopedHash + " " + "flex jcc footer"
    },
    "\xA9 Team wild \u2014 Adidas hackathon Amsterdam",
    _react2.default.createElement(_style2.default, {
      styleId: _footer2.default.__scopedHash,
      css: _footer2.default.__scoped
    })
  );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaultExport = ['.footer{padding:2.2rem;font-size:1.4rem;}'];
_defaultExport.__hash = '2119495985';
_defaultExport.__scoped = ['.footer.jsx-2766860016{padding:2.2rem;font-size:1.4rem;}'];
_defaultExport.__scopedHash = '2766860016';
exports.default = _defaultExport;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaultExport = [];
_defaultExport.__hash = '599194460';
_defaultExport.__scoped = [];
_defaultExport.__scopedHash = '201039581';
exports.default = _defaultExport;

/***/ })
/******/ ]);