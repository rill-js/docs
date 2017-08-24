require("source-map-support").install({ hookRequire: true })
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("marko/src/html");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("marko/src/runtime/html/helpers");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("rill");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@rill/loader");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = markdown;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_languages_bash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_languages_bash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_languages_bash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_xml__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_xml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_xml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_javascript__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_javascript__);






// Setup highlight.js languages.
__WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight___default.a.registerLanguage('bash', __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_languages_bash___default.a);
__WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight___default.a.registerLanguage('console', __WEBPACK_IMPORTED_MODULE_2_highlight_js_lib_languages_bash___default.a);
__WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight___default.a.registerLanguage('html', __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_xml___default.a);
__WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight___default.a.registerLanguage('xml', __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_languages_xml___default.a);
__WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight___default.a.registerLanguage('js', __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_javascript___default.a);
__WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight___default.a.registerLanguage('javascript', __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_javascript___default.a);

// Setup custom renderer for marked which uses highlight.js for syntax highlighting.
var renderer = new __WEBPACK_IMPORTED_MODULE_0_marked___default.a.Renderer();
renderer.code = function (code, lang) {
  lang = lang.toLowerCase();
  code = __WEBPACK_IMPORTED_MODULE_1_highlight_js_lib_highlight___default.a.highlight(lang, code, true).value;
  return '<pre><code class="hljs ' + lang + '">' + code + '</code></pre>';
};
__WEBPACK_IMPORTED_MODULE_0_marked___default.a.setOptions({ renderer: renderer });

/**
 * Parses text as markdown using marked.js and the custom renderer above.
 */
function markdown(text) {
  return __WEBPACK_IMPORTED_MODULE_0_marked___default()(text);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.26 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    module_svgLogo = __webpack_require__(37),
    svgLogo = module_svgLogo.default || module_svgLogo,
    marko_helpers = __webpack_require__(1),
    marko_attr = marko_helpers.a,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(__webpack_require__(38));

__webpack_require__(39);

__webpack_require__(40);

function render(input, out) {
  var data = input;

  out.w("<div id=\"page\"><a href=\"https://github.com/rill-js/rill\"><img style=\"position:absolute;top:0;left:0;border:0;\" src=\"https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png\"></a><section id=\"top\"><div id=\"menu\"><a href=\"/#top\" id=\"toggle\">&#9776;</a><ul><li><b>Documentation</b><hr></li><li><a href=\"/application#docs\" name=\"Application Documentation\">Application</a></li><li><a href=\"/context#docs\" name=\"Context Documentation\">Context</a></li><li><a href=\"/request#docs\" name=\"Request Documentation\">Request</a></li><li><a href=\"/response#docs\" name=\"Response Documentation\">Response</a></li><li><br><b>Community</b><hr></li><li><a href=\"/#community\" name=\"Community Links\">Links</a></li><li><a href=\"/#articles\" name=\"Community Articles\">Articles</a></li></ul></div><div id=\"heading\"><div id=\"logo\"><a href=\"/#docs\" name=\"Documentation\"><img" +
    marko_attr("src", svgLogo) +
    "></a></div></div></section>");

  include_tag({
      _target: input
    }, out);

  out.w("<div id=\"loading-screen\"><div class=\"loader\"></div></div><script>\n    !function(a,p,i,d,o,c,s){a.GoogleAnalyticsObject=i;a[i]||(a[i]=function(){\n    (a[i].q=a[i].q||[]).push(arguments)});a[i].l=+new Date;c=p.createElement(d);\n    s=p.getElementsByTagName(d)[0];c.src=o;s.parentNode.insertBefore(c,s)}\n    (window,document,'ga','script','//www.google-analytics.com/analytics.js');\n    ga('create', 'UA-53202133-2', 'auto');\n    ga('send', 'pageview');\n  </script></div>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/taglibs/core/include-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rill__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_helmet__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_fresh__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_fresh___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rill_fresh__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_etag__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_etag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rill_etag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_compress__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rill_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__rill_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__rill_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__rill_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__rill_expose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_fetcher__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_fetcher___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__rill_fetcher__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rill_session__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rill_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__rill_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rill_loader__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rill_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__rill_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rill_body__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rill_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__rill_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rill_unhandled__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rill_unhandled___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__rill_unhandled__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rill_redirect__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rill_redirect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__rill_redirect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views__ = __webpack_require__(22);



















var message = 'App Started';
console.time(message);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2_rill___default()().use(__WEBPACK_IMPORTED_MODULE_3__rill_helmet___default()(global.SECURITY)).use(__WEBPACK_IMPORTED_MODULE_14__rill_body___default()()).use(__WEBPACK_IMPORTED_MODULE_12__rill_session___default()()).use(__WEBPACK_IMPORTED_MODULE_13__rill_loader___default()()).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_6__rill_compress___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_1_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: '#009fe2' })).use(__WEBPACK_IMPORTED_MODULE_11__rill_fetcher___default()()).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).get(__WEBPACK_IMPORTED_MODULE_17__views__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_15__rill_unhandled___default()(__WEBPACK_IMPORTED_MODULE_16__rill_redirect___default()('/'))).listen(function () {
  console.timeEnd(message);
  console.log('');
}));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@rill/helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@rill/fresh");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@rill/etag");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@rill/compress");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@rill/static");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@rill/progress");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@rill/logger");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@rill/expose");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@rill/fetcher");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@rill/session");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@rill/body");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@rill/unhandled");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@rill/redirect");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rill__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_page__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_marko__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rill_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_loader__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rill_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rill_package_json__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rill_package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rill_package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_favicon_png__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_favicon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_favicon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_marko__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__index_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__docs_marko__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__docs_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__docs_marko__);



var _this = this;










// Register doc loader. (does caching and hydrating).
// Loads the docs from github every 12 hours.
Object(__WEBPACK_IMPORTED_MODULE_5__rill_loader__["register"])({ name: 'docs', ttl: '12 hours' }, function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref, section) {
    var fetch = _ref.fetch;
    var response;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (section === 'application') section = 'index';
            _context.next = 3;
            return fetch('https://raw.githubusercontent.com/rill-js/rill/master/docs/api/' + section + '.md');

          case 3:
            response = _context.sent;
            return _context.abrupt('return', response.text());

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());

// Expose app routes.
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_rill___default()().get(__WEBPACK_IMPORTED_MODULE_3__rill_page___default.a.html({ lang: 'en' }).title('Rill Documentation').meta({ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }).meta({ name: 'viewport', content: 'width=device-width,initial-scale=1' }).meta({ name: 'author', content: __WEBPACK_IMPORTED_MODULE_6_rill_package_json__["author"].name }).meta({ name: 'description', content: __WEBPACK_IMPORTED_MODULE_6_rill_package_json__["description"] }).meta({ name: 'keywords', content: __WEBPACK_IMPORTED_MODULE_6_rill_package_json__["keywords"].join(',') }).meta({ name: 'theme-color', content: '#00a1df' }).link({ rel: 'shortcut icon', href: __WEBPACK_IMPORTED_MODULE_7__assets_favicon_png___default.a }).link({ rel: 'stylesheet', href: '/index.css' }).script({ async: true, src: '/index.js' })).get('/*', function (_ref3, next) {
  var res = _ref3.res;

  res.append('Link', '</index.js>; rel=preload; as=script;');
  res.append('Link', '</index.css>; rel=preload; as=style;');
  return next();
}).get('/', __WEBPACK_IMPORTED_MODULE_4__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_8__index_marko___default.a)).get('/:section', function (_ref4, next) {
  var load = _ref4.load,
      locals = _ref4.locals,
      req = _ref4.req;
  var section = req.params.section;

  if (!['application', 'context', 'request', 'response'].includes(section)) return;
  locals.pendingContent = load('docs', section);
  return next();
}, __WEBPACK_IMPORTED_MODULE_4__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_9__docs_marko___default.a)));

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@rill/page");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@rill/marko");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("rill/package.json");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "/WjSVNuu8C0.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.26 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_component = {
        onCreate: function() {}
      },
    components_helpers = __webpack_require__(30),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/@rill/boilerplate-webpack-marko$0.0.1/app/views/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_markdown = __webpack_require__(4),
    markdown = module_markdown.default || module_markdown,
    module_content = __webpack_require__(36),
    content = module_content.default || module_content,
    marko_helpers = __webpack_require__(1),
    marko_str = marko_helpers.s,
    app_page_template = __webpack_require__(5),
    marko_loadTag = marko_helpers.t,
    app_page_tag = marko_loadTag(app_page_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    ">");

  app_page_tag({
      renderBody: function renderBody(out) {
        out.w("<section id=\"docs\"><div class=\"content\"><h1>What is Rill?</h1>" +
          marko_str(markdown(content)) +
          "</div></section>");
      }
    }, out);

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./index.marko"
        }
    ],
    tags: [
      "../components/app-page.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("marko/src/components/helpers");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/highlight");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/bash");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/xml");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">\n  <!-- Logo -->\n  <a href=\"https://rill.site\" alt=\"Rill\">\n    <img src=\"https://cdn.rawgit.com/rill-js/rill/master/Rill-Logo.svg\" width=\"300\" alt=\"Rill Logo\"/>\n  </a>\n\n  <br/>\n\n  <!-- Stability -->\n  <a href=\"https://nodejs.org/api/documentation.html#documentation_stability_index\">\n    <img src=\"https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square\" alt=\"API stability\"/>\n  </a>\n  <!-- Standard -->\n  <a href=\"https://github.com/feross/standard\">\n    <img src=\"https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square\" alt=\"Standard\"/>\n  </a>\n  <!-- NPM version -->\n  <a href=\"https://npmjs.org/package/rill\">\n    <img src=\"https://img.shields.io/npm/v/rill.svg?style=flat-square\" alt=\"NPM version\"/>\n  </a>\n  <!-- Travis build -->\n  <a href=\"https://travis-ci.org/rill-js/rill\">\n  <img src=\"https://img.shields.io/travis/rill-js/rill.svg?style=flat-square\" alt=\"Build status\"/>\n  </a>\n  <!-- Coveralls coverage -->\n  <a href=\"https://coveralls.io/github/rill-js/rill\">\n    <img src=\"https://img.shields.io/coveralls/rill-js/rill.svg?style=flat-square\" alt=\"Test Coverage\"/>\n  </a>\n  <!-- File size -->\n  <a href=\"https://github.com/rill-js/rill/blob/master/dist/rill.js\">\n    <img src=\"https://badge-size.herokuapp.com/rill-js/rill/master/dist/rill.js?style=flat-square\" alt=\"File size\"/>\n  </a>\n  <!-- Downloads -->\n  <a href=\"https://npmjs.org/package/rill\">\n    <img src=\"https://img.shields.io/npm/dm/rill.svg?style=flat-square\" alt=\"Downloads\"/>\n  </a>\n  <!-- Gitter chat -->\n  <a href=\"https://gitter.im/rill-js/rill\">\n    <img src=\"https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square\" alt=\"Gitter Chat\"/>\n  </a>\n  <!-- Saucelabs -->\n  <a href=\"https://saucelabs.com/u/rill-js\">\n    <img src=\"https://saucelabs.com/browser-matrix/rill-js.svg\" alt=\"Sauce Test Status\"/>\n  </a>\n</h1>\n\nExpressive HTTP middleware for [nodejs](https://nodejs.org) and the browser.\nRill brings cascading middleware to the browser and enables fully universal web applications.\nIt makes apps enjoyable to write with a simpler top down mental model of your app and free progressive enhancement.\n\nRill provides the minimum for abstractions over [nodejs](https://nodejs.org) and the browser enabling things like routing (with redirecting, refreshes and more), cookies, and middleware with the same api.\n\n# Installation\n\n#### Npm\n```console\nnpm install rill\n```\n\n#### Bower\n```console\nbower install rill\n```\n\n#### [Download](https://raw.githubusercontent.com/rill-js/rill/master/dist/rill.js)\n```html\n<script type=\"text/javascript\" src=\"rill.js\"></script>\n<script>\n  define(['rill'], function (rill) {...}) // AMD\n  window.rill // Global rill if no module system in place.\n</script>\n```\n\n# Browser support\nAll modern browsers are supported including IE10+. IE9 is also supported with a [History API polyfill](https://github.com/devote/HTML5-History-API).\n\nOlder browsers will also need to polyfill the Promise API, checkout [es6-promise](https://github.com/stefanpenner/es6-promise) for a good polyfill, babel-polyfill also covers this.\n\n# Community\n\n* [API Documentation](https://rill.site/application#docs)\n* [Examples](https://github.com/rill-js/todomvc)\n* [Wiki](https://github.com/rill-js/rill/wiki)\n* [Middleware List](https://github.com/rill-js/rill/wiki/Middleware)\n* [Gitter Community](https://gitter.im/rill-js/rill)\n* [Reddit Community](https://www.reddit.com/r/Rill)\n\n# Articles\n\n* [Universal web application framework - Interview with Dylan Piercey](https://survivejs.com/blog/rill-interview/)\n* [Isomorphic Javascript, let’s make it easier.](https://medium.com/@pierceydylan/isomorphic-javascript-it-just-has-to-work-b9da5b0c8035)\n* [How to make universal JavaScript applications — Part 1](https://medium.com/@pierceydylan/how-to-make-universal-javascript-applications-part-1-90e9032bc471)\n* [Browsers, Servers, and APIs](https://medium.com/@iamjohnhenry/browsers-servers-and-apis-2f7b10523f39)\n* [Why Everyone is Talking About Isomorphic](https://medium.com/capital-one-developers/why-everyone-is-talking-about-isomorphic-universal-javascript-and-why-it-matters-38c07c87905#.mdd84j28m)\n* [Isomorphic JavaScript: The Future of Web Apps](https://medium.com/airbnb-engineering/isomorphic-javascript-the-future-of-web-apps-10882b7a2ebc)\n\n# Why Rill?\nRill is the answer to a simple question; Can I run my [Express](https://github.com/expressjs/express) style router in the browser? Turns out you can and it works awesome.\n\nIt brings a common interface to many typical app like features in both the browser and [nodejs](https://nodejs.org). Many isomorphic frameworks have crazy abstractions and learning curves but with Rill, if you understand [Express](https://github.com/expressjs/express) or [Koa](https://github.com/koajs/koa), you already know how the routing works! In Rill you get to program much of your application logic using the same api (client or server) including routing, rendering, data fetching and more are easily shared.\n\nRill also works perfectly as a stand alone [nodejs](https://nodejs.org) server or a stand alone browser framework. This allows for easy progressive enhancement. If all is well the browser can handle much of your application logic and if JavaScript fails for any reason your server knows exactly what to do.\n\n# How does this thing work?\nIf you look at the source for Rill [here](https://github.com/rill-js/rill/tree/master/src) you will quickly notice there is ZERO browser specific code. This is all thanks to [@rill/http](https://github.com/rill-js/http) which is node's [HTTP.createServer](https://nodejs.org/api/http.html#http_http_createserver_requestlistener) ported to the browser.\n\nIn the browser it works by listening for internal link clicks, form submissions and browser history changes. It will then create a [Rill Context](https://rill.site/context#docs) for each of these events and emit it through the router, similar to how receiving a request works in [nodejs](https://nodejs.org).\n\nIt supports everything you'd expect from a client side [nodejs](https://nodejs.org) server. This includes redirects, refreshes, cookies, scrolling and url updates using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History).\n\n# Example\n\n### Create an app\n\n```javascript\n/**\n * The following code can run 100% in the browser or in nodejs.\n * Examples use es2015/2016 with Babel and JSX but this is optional.\n */\n\nimport rill from 'rill'\nconst app = rill()\n```\n\n### Setup middleware\n\n```javascript\n// Universal form data parsing middleware.\nimport bodyParser from '@rill/body'\napp.use(bodyParser())\n\n// Universal react rendering middleware.\nimport reactRenderer from '@rill/react'\napp.use(reactRenderer())\n\n// Example Logger\napp.use(async ({ req }, next)=> {\n  const start = new Date\n\n  // Rill uses promises for control flow.\n  // ES2016 async functions work great as well!\n  await next()\n\n  const ms = new Date - start\n  console.log(`${req.method} ${req.url} - ${ms}`)\n})\n```\n\n### Setup a page\n\n```javascript\n// Respond to a GET request.\napp.get('/todos', async ({ res })=> {\n  // Fetch a todolist from some service.\n  const todolist = await MyTodoListService.getAllTodos()\n\n  // Directly set React virtual dom to the body thanks to @rill/react.\n  // (Checkout @rill/html for universal html diffing).\n  res.body = (\n    <html>\n      <head>\n        <title>My App</title>\n        <meta name=\"description\" content=\"Rill Application\">\n      </head>\n      <body>\n        <form action=\"/add-todo\" method=\"POST\">\n          <h1>Just a plain old form</h1>\n          <input type=\"text\" name=\"todo\"/>\n          <button type=\"submit\">Add Todo</button>\n        </form>\n\n        {todolist.length\n          ? todolist.map(renderTodo)\n          : 'No todos to display.'\n        }\n        <script src=\"/app.js\"/>\n      </body>\n    </html>\n  )\n})\n```\n\n### Handle a form submission\n```javascript\n// Respond to a POST request.\napp.post('/add-todo', async ({ req, res })=> {\n  // We handle form submissions with Rill the same way one would with any other node framework.\n  // Here we are simply adding the todo via some service.\n  await MyTodoListService.addTodo({ text: req.body.todo })\n  // And then we redirect back (same as res.redirect('/todos'))\n  res.redirect('back')\n})\n```\n\n### Start app\n\n```javascript\n// Start a regular http server.\n// In the browser any form submissions or link clicks will intercepted by @rill/http.\napp.listen({ port: 80 })\n```\n\n## See Also\n\n* [isbrowser](https://github.com/DylanPiercey/isbrowser) - A browserify transform to remove server-side code.\n* [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - Universal http requests using WHATWG fetch.\n* [isomorphic-form-data](https://github.com/form-data/isomorphic-form-data) - Send multipart form data universally (able to send files and works with fetch).\n* [scroll-behavior](https://github.com/DylanPiercey/scroll-behaviour) - @rill/http will automatically try to use the \"smooth\" [scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) when scrolling to targets on link clicks. This will polyfill that across modern browsers.\n* [submit-form](https://github.com/DylanPiercey/submit-form) - Manually trigger Rill navigation in the browser.\n\n## Prior Art\n\n* [koa-client](https://github.com/kentjs/koa-client) - Koa clone that runs in the browser, inspired this package.\n* [monorouter](https://github.com/matthewwithanm/monorouter) - Another isomorphic router that partially inspired this package.\n\n## Contributions\n\n* Use `npm test` to run tests.\n\n## License\n\n[MIT](https://tldrlegal.com/license/mit-license)\n"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "/3ptjG2gK_g.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("marko/src/taglibs/core/include-tag");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.26 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    module_markdown = __webpack_require__(4),
    markdown = module_markdown.default || module_markdown,
    marko_helpers = __webpack_require__(1),
    marko_str = marko_helpers.s,
    marko_loadTag = marko_helpers.t,
    await_tag = marko_loadTag(__webpack_require__(42)),
    app_page_template = __webpack_require__(5),
    app_page_tag = marko_loadTag(app_page_template);

function render(input, out) {
  var data = input;

  out.w("<div>");

  app_page_tag({
      renderBody: function renderBody(out) {
        out.w("<section id=\"docs\"><div class=\"content\">");

        await_tag({
            _dataProvider: input.pendingContent,
            _name: "input.pendingContent",
            renderBody: function renderBody(out, content) {
              out.w(marko_str(markdown(content)));
            }
          }, out);

        out.w("</div></section>");
      }
    }, out);

  out.w("</div>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/taglibs/async/await-tag",
      "../components/app-page.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("marko/src/taglibs/async/await-tag");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWE1OGEyYzczZTExMTFiZjQxOTQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL2h0bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2FwcC91dGlsaXRpZXMvbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYXBwLXBhZ2UubWFya28iLCJ3ZWJwYWNrOi8vL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9mcmVzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2V0YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZmV0Y2hlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9ib2R5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvdW5oYW5kbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvcmVkaXJlY3RcIiIsIndlYnBhY2s6Ly8vYXBwL3ZpZXdzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9tYXJrb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJpbGwvcGFja2FnZS5qc29uXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvaW5kZXgubWFya28iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL2NvbXBvbmVudHMvaGVscGVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmlsbC9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrby9zcmMvdGFnbGlicy9jb3JlL2luY2x1ZGUtdGFnXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nzcy9wYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL3N0eWxlcy9vY2Vhbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXdzL2RvY3MubWFya28iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL3RhZ2xpYnMvYXN5bmMvYXdhaXQtdGFnXCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWE1OGEyYzczZTExMTFiZjQxOTQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtvL3NyYy9odG1sXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJpbGxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9sb2FkZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9sb2FkZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCdcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0J1xuaW1wb3J0IGJhc2ggZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaCdcbmltcG9ydCBodG1sIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbCdcbmltcG9ydCBqYXZhc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnXG5cbi8vIFNldHVwIGhpZ2hsaWdodC5qcyBsYW5ndWFnZXMuXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2Jhc2gnLCBiYXNoKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdjb25zb2xlJywgYmFzaClcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnaHRtbCcsIGh0bWwpXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ3htbCcsIGh0bWwpXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2pzJywgamF2YXNjcmlwdClcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnamF2YXNjcmlwdCcsIGphdmFzY3JpcHQpXG5cbi8vIFNldHVwIGN1c3RvbSByZW5kZXJlciBmb3IgbWFya2VkIHdoaWNoIHVzZXMgaGlnaGxpZ2h0LmpzIGZvciBzeW50YXggaGlnaGxpZ2h0aW5nLlxuY29uc3QgcmVuZGVyZXIgPSBuZXcgbWFya2VkLlJlbmRlcmVyKClcbnJlbmRlcmVyLmNvZGUgPSAoY29kZSwgbGFuZykgPT4ge1xuICBsYW5nID0gbGFuZy50b0xvd2VyQ2FzZSgpXG4gIGNvZGUgPSBobGpzLmhpZ2hsaWdodChsYW5nLCBjb2RlLCB0cnVlKS52YWx1ZVxuICByZXR1cm4gYDxwcmU+PGNvZGUgY2xhc3M9XCJobGpzICR7bGFuZ31cIj4ke2NvZGV9PC9jb2RlPjwvcHJlPmBcbn1cbm1hcmtlZC5zZXRPcHRpb25zKHsgcmVuZGVyZXIgfSlcblxuLyoqXG4gKiBQYXJzZXMgdGV4dCBhcyBtYXJrZG93biB1c2luZyBtYXJrZWQuanMgYW5kIHRoZSBjdXN0b20gcmVuZGVyZXIgYWJvdmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcmtkb3duICh0ZXh0KSB7XG4gIHJldHVybiBtYXJrZWQodGV4dClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvdXRpbGl0aWVzL21hcmtkb3duLmpzIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjI2IC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpLFxuICAgIG1vZHVsZV9zdmdMb2dvID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9sb2dvLnN2Z1wiKSxcbiAgICBzdmdMb2dvID0gbW9kdWxlX3N2Z0xvZ28uZGVmYXVsdCB8fCBtb2R1bGVfc3ZnTG9nbyxcbiAgICBtYXJrb19oZWxwZXJzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVyc1wiKSxcbiAgICBtYXJrb19hdHRyID0gbWFya29faGVscGVycy5hLFxuICAgIG1hcmtvX2xvYWRUYWcgPSBtYXJrb19oZWxwZXJzLnQsXG4gICAgaW5jbHVkZV90YWcgPSBtYXJrb19sb2FkVGFnKHJlcXVpcmUoXCJtYXJrby9zcmMvdGFnbGlicy9jb3JlL2luY2x1ZGUtdGFnXCIpKTtcblxucmVxdWlyZShcIi4uL2Nzcy9wYWdlLmNzc1wiKTtcblxucmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL29jZWFuLmNzc1wiKTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBvdXQudyhcIjxkaXYgaWQ9XFxcInBhZ2VcXFwiPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9yaWxsLWpzL3JpbGxcXFwiPjxpbWcgc3R5bGU9XFxcInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtib3JkZXI6MDtcXFwiIHNyYz1cXFwiaHR0cHM6Ly9jYW1vLmdpdGh1YnVzZXJjb250ZW50LmNvbS81NjdjM2E0OGQ3OTZlMmZjMDZlYTgwNDA5Y2M5ZGQ4MmJmNzE0NDM0LzY4NzQ3NDcwNzMzYTJmMmY3MzMzMmU2MTZkNjE3YTZmNmU2MTc3NzMyZTYzNmY2ZDJmNjc2OTc0Njg3NTYyMmY3MjY5NjI2MjZmNmU3MzJmNjY2ZjcyNmI2ZDY1NWY2YzY1NjY3NDVmNjQ2MTcyNmI2MjZjNzU2NTVmMzEzMjMxMzYzMjMxMmU3MDZlNjdcXFwiIGFsdD1cXFwiRm9yayBtZSBvbiBHaXRIdWJcXFwiIGRhdGEtY2Fub25pY2FsLXNyYz1cXFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2dpdGh1Yi9yaWJib25zL2ZvcmttZV9sZWZ0X2RhcmtibHVlXzEyMTYyMS5wbmdcXFwiPjwvYT48c2VjdGlvbiBpZD1cXFwidG9wXFxcIj48ZGl2IGlkPVxcXCJtZW51XFxcIj48YSBocmVmPVxcXCIvI3RvcFxcXCIgaWQ9XFxcInRvZ2dsZVxcXCI+JiM5Nzc2OzwvYT48dWw+PGxpPjxiPkRvY3VtZW50YXRpb248L2I+PGhyPjwvbGk+PGxpPjxhIGhyZWY9XFxcIi9hcHBsaWNhdGlvbiNkb2NzXFxcIiBuYW1lPVxcXCJBcHBsaWNhdGlvbiBEb2N1bWVudGF0aW9uXFxcIj5BcHBsaWNhdGlvbjwvYT48L2xpPjxsaT48YSBocmVmPVxcXCIvY29udGV4dCNkb2NzXFxcIiBuYW1lPVxcXCJDb250ZXh0IERvY3VtZW50YXRpb25cXFwiPkNvbnRleHQ8L2E+PC9saT48bGk+PGEgaHJlZj1cXFwiL3JlcXVlc3QjZG9jc1xcXCIgbmFtZT1cXFwiUmVxdWVzdCBEb2N1bWVudGF0aW9uXFxcIj5SZXF1ZXN0PC9hPjwvbGk+PGxpPjxhIGhyZWY9XFxcIi9yZXNwb25zZSNkb2NzXFxcIiBuYW1lPVxcXCJSZXNwb25zZSBEb2N1bWVudGF0aW9uXFxcIj5SZXNwb25zZTwvYT48L2xpPjxsaT48YnI+PGI+Q29tbXVuaXR5PC9iPjxocj48L2xpPjxsaT48YSBocmVmPVxcXCIvI2NvbW11bml0eVxcXCIgbmFtZT1cXFwiQ29tbXVuaXR5IExpbmtzXFxcIj5MaW5rczwvYT48L2xpPjxsaT48YSBocmVmPVxcXCIvI2FydGljbGVzXFxcIiBuYW1lPVxcXCJDb21tdW5pdHkgQXJ0aWNsZXNcXFwiPkFydGljbGVzPC9hPjwvbGk+PC91bD48L2Rpdj48ZGl2IGlkPVxcXCJoZWFkaW5nXFxcIj48ZGl2IGlkPVxcXCJsb2dvXFxcIj48YSBocmVmPVxcXCIvI2RvY3NcXFwiIG5hbWU9XFxcIkRvY3VtZW50YXRpb25cXFwiPjxpbWdcIiArXG4gICAgbWFya29fYXR0cihcInNyY1wiLCBzdmdMb2dvKSArXG4gICAgXCI+PC9hPjwvZGl2PjwvZGl2Pjwvc2VjdGlvbj5cIik7XG5cbiAgaW5jbHVkZV90YWcoe1xuICAgICAgX3RhcmdldDogaW5wdXRcbiAgICB9LCBvdXQpO1xuXG4gIG91dC53KFwiPGRpdiBpZD1cXFwibG9hZGluZy1zY3JlZW5cXFwiPjxkaXYgY2xhc3M9XFxcImxvYWRlclxcXCI+PC9kaXY+PC9kaXY+PHNjcmlwdD5cXG4gICAgIWZ1bmN0aW9uKGEscCxpLGQsbyxjLHMpe2EuR29vZ2xlQW5hbHl0aWNzT2JqZWN0PWk7YVtpXXx8KGFbaV09ZnVuY3Rpb24oKXtcXG4gICAgKGFbaV0ucT1hW2ldLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9KTthW2ldLmw9K25ldyBEYXRlO2M9cC5jcmVhdGVFbGVtZW50KGQpO1xcbiAgICBzPXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZClbMF07Yy5zcmM9bztzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGMscyl9XFxuICAgICh3aW5kb3csZG9jdW1lbnQsJ2dhJywnc2NyaXB0JywnLy93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJyk7XFxuICAgIGdhKCdjcmVhdGUnLCAnVUEtNTMyMDIxMzMtMicsICdhdXRvJyk7XFxuICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XFxuICA8L3NjcmlwdD48L2Rpdj5cIik7XG59XG5cbm1hcmtvX3RlbXBsYXRlLl8gPSByZW5kZXI7XG5cbm1hcmtvX3RlbXBsYXRlLm1ldGEgPSB7XG4gICAgdGFnczogW1xuICAgICAgXCJtYXJrby9zcmMvdGFnbGlicy9jb3JlL2luY2x1ZGUtdGFnXCJcbiAgICBdXG4gIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL2FwcC1wYWdlLm1hcmtvXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBtcyBmcm9tICdtcydcbmltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBoZWxtZXQgZnJvbSAnQHJpbGwvaGVsbWV0J1xuaW1wb3J0IGZyZXNoIGZyb20gJ0ByaWxsL2ZyZXNoJ1xuaW1wb3J0IGV0YWcgZnJvbSAnQHJpbGwvZXRhZydcbmltcG9ydCBjb21wcmVzcyBmcm9tICdAcmlsbC9jb21wcmVzcydcbmltcG9ydCBzZXJ2ZSBmcm9tICdAcmlsbC9zdGF0aWMnXG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnQHJpbGwvcHJvZ3Jlc3MnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0ByaWxsL2xvZ2dlcidcbmltcG9ydCBleHBvc2UgZnJvbSAnQHJpbGwvZXhwb3NlJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHJpbGwvZmV0Y2hlcidcbmltcG9ydCBzZXNzaW9uIGZyb20gJ0ByaWxsL3Nlc3Npb24nXG5pbXBvcnQgbG9hZGVyIGZyb20gJ0ByaWxsL2xvYWRlcidcbmltcG9ydCBib2R5IGZyb20gJ0ByaWxsL2JvZHknXG5pbXBvcnQgdW5oYW5kbGVkIGZyb20gJ0ByaWxsL3VuaGFuZGxlZCdcbmltcG9ydCByZWRpcmVjdCBmcm9tICdAcmlsbC9yZWRpcmVjdCdcbmltcG9ydCB2aWV3cyBmcm9tICcuL3ZpZXdzJ1xuXG5jb25zdCBtZXNzYWdlID0gJ0FwcCBTdGFydGVkJ1xuY29uc29sZS50aW1lKG1lc3NhZ2UpXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpXG4gIC51c2UoaGVsbWV0KGdsb2JhbC5TRUNVUklUWSkpXG4gIC51c2UoYm9keSgpKVxuICAudXNlKHNlc3Npb24oKSlcbiAgLnVzZShsb2FkZXIoKSlcbiAgLnVzZShsb2dnZXIoKSlcbiAgLnVzZShmcmVzaCgpKVxuICAudXNlKGV0YWcoKSlcbiAgLnVzZShjb21wcmVzcygpKVxuICAuZ2V0KHNlcnZlKCdidWlsZC9wdWJsaWMnLCB7IGd6aXA6IHRydWUsIGNhY2hlOiBgJHttcygnMzAgZGF5cycpfTsgaW1tdXRhYmxlYCB9KSlcbiAgLnVzZShwcm9ncmVzcyh7IHNwaW5uZXI6IGZhbHNlLCBjb2xvcjogJyMwMDlmZTInIH0pKVxuICAudXNlKGZldGNoZXIoKSlcbiAgLnVzZShleHBvc2UoKSlcbiAgLmdldCh2aWV3cylcbiAgLmdldCh1bmhhbmRsZWQocmVkaXJlY3QoJy8nKSkpXG4gIC5saXN0ZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUudGltZUVuZChtZXNzYWdlKVxuICAgIGNvbnNvbGUubG9nKCcnKVxuICB9KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2hlbG1ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2hlbG1ldFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2ZyZXNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZnJlc2hcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXRhZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V0YWdcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvY29tcHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zdGF0aWNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9zdGF0aWNcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcHJvZ3Jlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wcm9ncmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9sb2dnZXJcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXhwb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2ZldGNoZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9mZXRjaGVyXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Nlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9zZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2JvZHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9ib2R5XCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3VuaGFuZGxlZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9yZWRpcmVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3JlZGlyZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBwYWdlIGZyb20gJ0ByaWxsL3BhZ2UnXG5pbXBvcnQgcmVuZGVyIGZyb20gJ0ByaWxsL21hcmtvJ1xuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICdAcmlsbC9sb2FkZXInXG5pbXBvcnQgeyBkZXNjcmlwdGlvbiwgYXV0aG9yLCBrZXl3b3JkcyB9IGZyb20gJ3JpbGwvcGFja2FnZS5qc29uJ1xuaW1wb3J0IGltZ0Zhdmljb24gZnJvbSAnLi4vYXNzZXRzL2Zhdmljb24ucG5nJ1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaW5kZXgubWFya28nXG5pbXBvcnQgZG9jc1BhZ2UgZnJvbSAnLi9kb2NzLm1hcmtvJ1xuXG4vLyBSZWdpc3RlciBkb2MgbG9hZGVyLiAoZG9lcyBjYWNoaW5nIGFuZCBoeWRyYXRpbmcpLlxuLy8gTG9hZHMgdGhlIGRvY3MgZnJvbSBnaXRodWIgZXZlcnkgMTIgaG91cnMuXG5yZWdpc3Rlcih7IG5hbWU6ICdkb2NzJywgdHRsOiAnMTIgaG91cnMnIH0sIGFzeW5jICh7IGZldGNoIH0sIHNlY3Rpb24pID0+IHtcbiAgaWYgKHNlY3Rpb24gPT09ICdhcHBsaWNhdGlvbicpIHNlY3Rpb24gPSAnaW5kZXgnXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9yaWxsLWpzL3JpbGwvbWFzdGVyL2RvY3MvYXBpLyR7c2VjdGlvbn0ubWRgKVxuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG59KVxuXG4vLyBFeHBvc2UgYXBwIHJvdXRlcy5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpXG4gIC5nZXQocGFnZVxuICAgIC5odG1sKHsgbGFuZzogJ2VuJyB9KVxuICAgIC50aXRsZSgnUmlsbCBEb2N1bWVudGF0aW9uJylcbiAgICAubWV0YSh7ICdodHRwLWVxdWl2JzogJ1gtVUEtQ29tcGF0aWJsZScsIGNvbnRlbnQ6ICdJRT1lZGdlLGNocm9tZT0xJyB9KVxuICAgIC5tZXRhKHsgbmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDogJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnIH0pXG4gICAgLm1ldGEoeyBuYW1lOiAnYXV0aG9yJywgY29udGVudDogYXV0aG9yLm5hbWUgfSlcbiAgICAubWV0YSh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IGRlc2NyaXB0aW9uIH0pXG4gICAgLm1ldGEoeyBuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiBrZXl3b3Jkcy5qb2luKCcsJykgfSlcbiAgICAubWV0YSh7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjMDBhMWRmJyB9KVxuICAgIC5saW5rKHsgcmVsOiAnc2hvcnRjdXQgaWNvbicsIGhyZWY6IGltZ0Zhdmljb24gfSlcbiAgICAubGluayh7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiAnL2luZGV4LmNzcycgfSlcbiAgICAuc2NyaXB0KHsgYXN5bmM6IHRydWUsIHNyYzogJy9pbmRleC5qcycgfSlcbiAgKVxuICAuZ2V0KCcvKicsICh7IHJlcyB9LCBuZXh0KSA9PiB7XG4gICAgcmVzLmFwcGVuZCgnTGluaycsICc8L2luZGV4LmpzPjsgcmVsPXByZWxvYWQ7IGFzPXNjcmlwdDsnKVxuICAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9pbmRleC5jc3M+OyByZWw9cHJlbG9hZDsgYXM9c3R5bGU7JylcbiAgICByZXR1cm4gbmV4dCgpXG4gIH0pXG4gIC5nZXQoJy8nLCByZW5kZXIoaG9tZVBhZ2UpKVxuICAuZ2V0KCcvOnNlY3Rpb24nLCAoeyBsb2FkLCBsb2NhbHMsIHJlcSB9LCBuZXh0KSA9PiB7XG4gICAgY29uc3QgeyBzZWN0aW9uIH0gPSByZXEucGFyYW1zXG4gICAgaWYgKCFbJ2FwcGxpY2F0aW9uJywgJ2NvbnRleHQnLCAncmVxdWVzdCcsICdyZXNwb25zZSddLmluY2x1ZGVzKHNlY3Rpb24pKSByZXR1cm5cbiAgICBsb2NhbHMucGVuZGluZ0NvbnRlbnQgPSBsb2FkKCdkb2NzJywgc2VjdGlvbilcbiAgICByZXR1cm4gbmV4dCgpXG4gIH0sIHJlbmRlcihkb2NzUGFnZSkpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3ZpZXdzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9wYWdlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcGFnZVwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9tYXJrb1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL21hcmtvXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJpbGwvcGFja2FnZS5qc29uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmlsbC9wYWNrYWdlLmpzb25cIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9XalNWTnV1OEMwLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9mYXZpY29uLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjI2IC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpLFxuICAgIG1hcmtvX2NvbXBvbmVudCA9IHtcbiAgICAgICAgb25DcmVhdGU6IGZ1bmN0aW9uKCkge31cbiAgICAgIH0sXG4gICAgY29tcG9uZW50c19oZWxwZXJzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9jb21wb25lbnRzL2hlbHBlcnNcIiksXG4gICAgbWFya29fcmVnaXN0ZXJDb21wb25lbnQgPSBjb21wb25lbnRzX2hlbHBlcnMucmMsXG4gICAgbWFya29fY29tcG9uZW50VHlwZSA9IG1hcmtvX3JlZ2lzdGVyQ29tcG9uZW50KFwiL0ByaWxsL2JvaWxlcnBsYXRlLXdlYnBhY2stbWFya28kMC4wLjEvYXBwL3ZpZXdzL2luZGV4Lm1hcmtvXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuICAgIH0pLFxuICAgIG1hcmtvX3JlbmRlcmVyID0gY29tcG9uZW50c19oZWxwZXJzLnIsXG4gICAgbWFya29fZGVmaW5lQ29tcG9uZW50ID0gY29tcG9uZW50c19oZWxwZXJzLmMsXG4gICAgbW9kdWxlX21hcmtkb3duID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9tYXJrZG93blwiKSxcbiAgICBtYXJrZG93biA9IG1vZHVsZV9tYXJrZG93bi5kZWZhdWx0IHx8IG1vZHVsZV9tYXJrZG93bixcbiAgICBtb2R1bGVfY29udGVudCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvcmlsbC9SRUFETUUubWRcIiksXG4gICAgY29udGVudCA9IG1vZHVsZV9jb250ZW50LmRlZmF1bHQgfHwgbW9kdWxlX2NvbnRlbnQsXG4gICAgbWFya29faGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiksXG4gICAgbWFya29fc3RyID0gbWFya29faGVscGVycy5zLFxuICAgIGFwcF9wYWdlX3RlbXBsYXRlID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvYXBwLXBhZ2UubWFya29cIiksXG4gICAgbWFya29fbG9hZFRhZyA9IG1hcmtvX2hlbHBlcnMudCxcbiAgICBhcHBfcGFnZV90YWcgPSBtYXJrb19sb2FkVGFnKGFwcF9wYWdlX3RlbXBsYXRlKSxcbiAgICBtYXJrb19hdHRyID0gbWFya29faGVscGVycy5hO1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCwgX19jb21wb25lbnQsIGNvbXBvbmVudCwgc3RhdGUpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBvdXQudyhcIjxkaXZcIiArXG4gICAgbWFya29fYXR0cihcImlkXCIsIF9fY29tcG9uZW50LmlkKSArXG4gICAgXCI+XCIpO1xuXG4gIGFwcF9wYWdlX3RhZyh7XG4gICAgICByZW5kZXJCb2R5OiBmdW5jdGlvbiByZW5kZXJCb2R5KG91dCkge1xuICAgICAgICBvdXQudyhcIjxzZWN0aW9uIGlkPVxcXCJkb2NzXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj48aDE+V2hhdCBpcyBSaWxsPzwvaDE+XCIgK1xuICAgICAgICAgIG1hcmtvX3N0cihtYXJrZG93bihjb250ZW50KSkgK1xuICAgICAgICAgIFwiPC9kaXY+PC9zZWN0aW9uPlwiKTtcbiAgICAgIH1cbiAgICB9LCBvdXQpO1xuXG4gIG91dC53KFwiPC9kaXY+XCIpO1xufVxuXG5tYXJrb190ZW1wbGF0ZS5fID0gbWFya29fcmVuZGVyZXIocmVuZGVyLCB7XG4gICAgdHlwZTogbWFya29fY29tcG9uZW50VHlwZVxuICB9LCBtYXJrb19jb21wb25lbnQpO1xuXG5tYXJrb190ZW1wbGF0ZS5Db21wb25lbnQgPSBtYXJrb19kZWZpbmVDb21wb25lbnQobWFya29fY29tcG9uZW50LCBtYXJrb190ZW1wbGF0ZS5fKTtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHtcbiAgICBkZXBzOiBbXG4gICAgICB7XG4gICAgICAgICAgdHlwZTogXCJyZXF1aXJlXCIsXG4gICAgICAgICAgcGF0aDogXCIuL2luZGV4Lm1hcmtvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgdGFnczogW1xuICAgICAgXCIuLi9jb21wb25lbnRzL2FwcC1wYWdlLm1hcmtvXCJcbiAgICBdXG4gIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC92aWV3cy9pbmRleC5tYXJrb1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2NvbXBvbmVudHMvaGVscGVyc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtvL3NyYy9jb21wb25lbnRzL2hlbHBlcnNcIlxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWFya2VkXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9oaWdobGlnaHRcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2hcIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveG1sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveG1sXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDEgYWxpZ249XFxcImNlbnRlclxcXCI+XFxuICA8IS0tIExvZ28gLS0+XFxuICA8YSBocmVmPVxcXCJodHRwczovL3JpbGwuc2l0ZVxcXCIgYWx0PVxcXCJSaWxsXFxcIj5cXG4gICAgPGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLnJhd2dpdC5jb20vcmlsbC1qcy9yaWxsL21hc3Rlci9SaWxsLUxvZ28uc3ZnXFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBhbHQ9XFxcIlJpbGwgTG9nb1xcXCIvPlxcbiAgPC9hPlxcblxcbiAgPGJyLz5cXG5cXG4gIDwhLS0gU3RhYmlsaXR5IC0tPlxcbiAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9kb2N1bWVudGF0aW9uLmh0bWwjZG9jdW1lbnRhdGlvbl9zdGFiaWxpdHlfaW5kZXhcXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9iYWRnZS9zdGFiaWxpdHktc3RhYmxlLWJyaWdodGdyZWVuLnN2Zz9zdHlsZT1mbGF0LXNxdWFyZVxcXCIgYWx0PVxcXCJBUEkgc3RhYmlsaXR5XFxcIi8+XFxuICA8L2E+XFxuICA8IS0tIFN0YW5kYXJkIC0tPlxcbiAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9zdGFuZGFyZFxcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJodHRwczovL2ltZy5zaGllbGRzLmlvL2JhZGdlL2NvZGUlMjBzdHlsZS1zdGFuZGFyZC1icmlnaHRncmVlbi5zdmc/c3R5bGU9ZmxhdC1zcXVhcmVcXFwiIGFsdD1cXFwiU3RhbmRhcmRcXFwiLz5cXG4gIDwvYT5cXG4gIDwhLS0gTlBNIHZlcnNpb24gLS0+XFxuICA8YSBocmVmPVxcXCJodHRwczovL25wbWpzLm9yZy9wYWNrYWdlL3JpbGxcXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9ucG0vdi9yaWxsLnN2Zz9zdHlsZT1mbGF0LXNxdWFyZVxcXCIgYWx0PVxcXCJOUE0gdmVyc2lvblxcXCIvPlxcbiAgPC9hPlxcbiAgPCEtLSBUcmF2aXMgYnVpbGQgLS0+XFxuICA8YSBocmVmPVxcXCJodHRwczovL3RyYXZpcy1jaS5vcmcvcmlsbC1qcy9yaWxsXFxcIj5cXG4gIDxpbWcgc3JjPVxcXCJodHRwczovL2ltZy5zaGllbGRzLmlvL3RyYXZpcy9yaWxsLWpzL3JpbGwuc3ZnP3N0eWxlPWZsYXQtc3F1YXJlXFxcIiBhbHQ9XFxcIkJ1aWxkIHN0YXR1c1xcXCIvPlxcbiAgPC9hPlxcbiAgPCEtLSBDb3ZlcmFsbHMgY292ZXJhZ2UgLS0+XFxuICA8YSBocmVmPVxcXCJodHRwczovL2NvdmVyYWxscy5pby9naXRodWIvcmlsbC1qcy9yaWxsXFxcIj5cXG4gICAgPGltZyBzcmM9XFxcImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vY292ZXJhbGxzL3JpbGwtanMvcmlsbC5zdmc/c3R5bGU9ZmxhdC1zcXVhcmVcXFwiIGFsdD1cXFwiVGVzdCBDb3ZlcmFnZVxcXCIvPlxcbiAgPC9hPlxcbiAgPCEtLSBGaWxlIHNpemUgLS0+XFxuICA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vcmlsbC1qcy9yaWxsL2Jsb2IvbWFzdGVyL2Rpc3QvcmlsbC5qc1xcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJodHRwczovL2JhZGdlLXNpemUuaGVyb2t1YXBwLmNvbS9yaWxsLWpzL3JpbGwvbWFzdGVyL2Rpc3QvcmlsbC5qcz9zdHlsZT1mbGF0LXNxdWFyZVxcXCIgYWx0PVxcXCJGaWxlIHNpemVcXFwiLz5cXG4gIDwvYT5cXG4gIDwhLS0gRG93bmxvYWRzIC0tPlxcbiAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9ucG1qcy5vcmcvcGFja2FnZS9yaWxsXFxcIj5cXG4gICAgPGltZyBzcmM9XFxcImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vbnBtL2RtL3JpbGwuc3ZnP3N0eWxlPWZsYXQtc3F1YXJlXFxcIiBhbHQ9XFxcIkRvd25sb2Fkc1xcXCIvPlxcbiAgPC9hPlxcbiAgPCEtLSBHaXR0ZXIgY2hhdCAtLT5cXG4gIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0dGVyLmltL3JpbGwtanMvcmlsbFxcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJodHRwczovL2ltZy5zaGllbGRzLmlvL2dpdHRlci9yb29tL3JpbGwtanMvcmlsbC5zdmc/c3R5bGU9ZmxhdC1zcXVhcmVcXFwiIGFsdD1cXFwiR2l0dGVyIENoYXRcXFwiLz5cXG4gIDwvYT5cXG4gIDwhLS0gU2F1Y2VsYWJzIC0tPlxcbiAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9zYXVjZWxhYnMuY29tL3UvcmlsbC1qc1xcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJodHRwczovL3NhdWNlbGFicy5jb20vYnJvd3Nlci1tYXRyaXgvcmlsbC1qcy5zdmdcXFwiIGFsdD1cXFwiU2F1Y2UgVGVzdCBTdGF0dXNcXFwiLz5cXG4gIDwvYT5cXG48L2gxPlxcblxcbkV4cHJlc3NpdmUgSFRUUCBtaWRkbGV3YXJlIGZvciBbbm9kZWpzXShodHRwczovL25vZGVqcy5vcmcpIGFuZCB0aGUgYnJvd3Nlci5cXG5SaWxsIGJyaW5ncyBjYXNjYWRpbmcgbWlkZGxld2FyZSB0byB0aGUgYnJvd3NlciBhbmQgZW5hYmxlcyBmdWxseSB1bml2ZXJzYWwgd2ViIGFwcGxpY2F0aW9ucy5cXG5JdCBtYWtlcyBhcHBzIGVuam95YWJsZSB0byB3cml0ZSB3aXRoIGEgc2ltcGxlciB0b3AgZG93biBtZW50YWwgbW9kZWwgb2YgeW91ciBhcHAgYW5kIGZyZWUgcHJvZ3Jlc3NpdmUgZW5oYW5jZW1lbnQuXFxuXFxuUmlsbCBwcm92aWRlcyB0aGUgbWluaW11bSBmb3IgYWJzdHJhY3Rpb25zIG92ZXIgW25vZGVqc10oaHR0cHM6Ly9ub2RlanMub3JnKSBhbmQgdGhlIGJyb3dzZXIgZW5hYmxpbmcgdGhpbmdzIGxpa2Ugcm91dGluZyAod2l0aCByZWRpcmVjdGluZywgcmVmcmVzaGVzIGFuZCBtb3JlKSwgY29va2llcywgYW5kIG1pZGRsZXdhcmUgd2l0aCB0aGUgc2FtZSBhcGkuXFxuXFxuIyBJbnN0YWxsYXRpb25cXG5cXG4jIyMjIE5wbVxcbmBgYGNvbnNvbGVcXG5ucG0gaW5zdGFsbCByaWxsXFxuYGBgXFxuXFxuIyMjIyBCb3dlclxcbmBgYGNvbnNvbGVcXG5ib3dlciBpbnN0YWxsIHJpbGxcXG5gYGBcXG5cXG4jIyMjIFtEb3dubG9hZF0oaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JpbGwtanMvcmlsbC9tYXN0ZXIvZGlzdC9yaWxsLmpzKVxcbmBgYGh0bWxcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvamF2YXNjcmlwdFxcXCIgc3JjPVxcXCJyaWxsLmpzXFxcIj48L3NjcmlwdD5cXG48c2NyaXB0PlxcbiAgZGVmaW5lKFsncmlsbCddLCBmdW5jdGlvbiAocmlsbCkgey4uLn0pIC8vIEFNRFxcbiAgd2luZG93LnJpbGwgLy8gR2xvYmFsIHJpbGwgaWYgbm8gbW9kdWxlIHN5c3RlbSBpbiBwbGFjZS5cXG48L3NjcmlwdD5cXG5gYGBcXG5cXG4jIEJyb3dzZXIgc3VwcG9ydFxcbkFsbCBtb2Rlcm4gYnJvd3NlcnMgYXJlIHN1cHBvcnRlZCBpbmNsdWRpbmcgSUUxMCsuIElFOSBpcyBhbHNvIHN1cHBvcnRlZCB3aXRoIGEgW0hpc3RvcnkgQVBJIHBvbHlmaWxsXShodHRwczovL2dpdGh1Yi5jb20vZGV2b3RlL0hUTUw1LUhpc3RvcnktQVBJKS5cXG5cXG5PbGRlciBicm93c2VycyB3aWxsIGFsc28gbmVlZCB0byBwb2x5ZmlsbCB0aGUgUHJvbWlzZSBBUEksIGNoZWNrb3V0IFtlczYtcHJvbWlzZV0oaHR0cHM6Ly9naXRodWIuY29tL3N0ZWZhbnBlbm5lci9lczYtcHJvbWlzZSkgZm9yIGEgZ29vZCBwb2x5ZmlsbCwgYmFiZWwtcG9seWZpbGwgYWxzbyBjb3ZlcnMgdGhpcy5cXG5cXG4jIENvbW11bml0eVxcblxcbiogW0FQSSBEb2N1bWVudGF0aW9uXShodHRwczovL3JpbGwuc2l0ZS9hcHBsaWNhdGlvbiNkb2NzKVxcbiogW0V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vcmlsbC1qcy90b2RvbXZjKVxcbiogW1dpa2ldKGh0dHBzOi8vZ2l0aHViLmNvbS9yaWxsLWpzL3JpbGwvd2lraSlcXG4qIFtNaWRkbGV3YXJlIExpc3RdKGh0dHBzOi8vZ2l0aHViLmNvbS9yaWxsLWpzL3JpbGwvd2lraS9NaWRkbGV3YXJlKVxcbiogW0dpdHRlciBDb21tdW5pdHldKGh0dHBzOi8vZ2l0dGVyLmltL3JpbGwtanMvcmlsbClcXG4qIFtSZWRkaXQgQ29tbXVuaXR5XShodHRwczovL3d3dy5yZWRkaXQuY29tL3IvUmlsbClcXG5cXG4jIEFydGljbGVzXFxuXFxuKiBbVW5pdmVyc2FsIHdlYiBhcHBsaWNhdGlvbiBmcmFtZXdvcmsgLSBJbnRlcnZpZXcgd2l0aCBEeWxhbiBQaWVyY2V5XShodHRwczovL3N1cnZpdmVqcy5jb20vYmxvZy9yaWxsLWludGVydmlldy8pXFxuKiBbSXNvbW9ycGhpYyBKYXZhc2NyaXB0LCBsZXTigJlzIG1ha2UgaXQgZWFzaWVyLl0oaHR0cHM6Ly9tZWRpdW0uY29tL0BwaWVyY2V5ZHlsYW4vaXNvbW9ycGhpYy1qYXZhc2NyaXB0LWl0LWp1c3QtaGFzLXRvLXdvcmstYjlkYTViMGM4MDM1KVxcbiogW0hvdyB0byBtYWtlIHVuaXZlcnNhbCBKYXZhU2NyaXB0IGFwcGxpY2F0aW9uc+KAiuKAlOKAilBhcnQgMV0oaHR0cHM6Ly9tZWRpdW0uY29tL0BwaWVyY2V5ZHlsYW4vaG93LXRvLW1ha2UtdW5pdmVyc2FsLWphdmFzY3JpcHQtYXBwbGljYXRpb25zLXBhcnQtMS05MGU5MDMyYmM0NzEpXFxuKiBbQnJvd3NlcnMsIFNlcnZlcnMsIGFuZCBBUElzXShodHRwczovL21lZGl1bS5jb20vQGlhbWpvaG5oZW5yeS9icm93c2Vycy1zZXJ2ZXJzLWFuZC1hcGlzLTJmN2IxMDUyM2YzOSlcXG4qIFtXaHkgRXZlcnlvbmUgaXMgVGFsa2luZyBBYm91dCBJc29tb3JwaGljXShodHRwczovL21lZGl1bS5jb20vY2FwaXRhbC1vbmUtZGV2ZWxvcGVycy93aHktZXZlcnlvbmUtaXMtdGFsa2luZy1hYm91dC1pc29tb3JwaGljLXVuaXZlcnNhbC1qYXZhc2NyaXB0LWFuZC13aHktaXQtbWF0dGVycy0zOGMwN2M4NzkwNSMubWRkODRqMjhtKVxcbiogW0lzb21vcnBoaWMgSmF2YVNjcmlwdDogVGhlIEZ1dHVyZSBvZiBXZWIgQXBwc10oaHR0cHM6Ly9tZWRpdW0uY29tL2FpcmJuYi1lbmdpbmVlcmluZy9pc29tb3JwaGljLWphdmFzY3JpcHQtdGhlLWZ1dHVyZS1vZi13ZWItYXBwcy0xMDg4MmI3YTJlYmMpXFxuXFxuIyBXaHkgUmlsbD9cXG5SaWxsIGlzIHRoZSBhbnN3ZXIgdG8gYSBzaW1wbGUgcXVlc3Rpb247IENhbiBJIHJ1biBteSBbRXhwcmVzc10oaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9leHByZXNzKSBzdHlsZSByb3V0ZXIgaW4gdGhlIGJyb3dzZXI/IFR1cm5zIG91dCB5b3UgY2FuIGFuZCBpdCB3b3JrcyBhd2Vzb21lLlxcblxcbkl0IGJyaW5ncyBhIGNvbW1vbiBpbnRlcmZhY2UgdG8gbWFueSB0eXBpY2FsIGFwcCBsaWtlIGZlYXR1cmVzIGluIGJvdGggdGhlIGJyb3dzZXIgYW5kIFtub2RlanNdKGh0dHBzOi8vbm9kZWpzLm9yZykuIE1hbnkgaXNvbW9ycGhpYyBmcmFtZXdvcmtzIGhhdmUgY3JhenkgYWJzdHJhY3Rpb25zIGFuZCBsZWFybmluZyBjdXJ2ZXMgYnV0IHdpdGggUmlsbCwgaWYgeW91IHVuZGVyc3RhbmQgW0V4cHJlc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvZXhwcmVzcykgb3IgW0tvYV0oaHR0cHM6Ly9naXRodWIuY29tL2tvYWpzL2tvYSksIHlvdSBhbHJlYWR5IGtub3cgaG93IHRoZSByb3V0aW5nIHdvcmtzISBJbiBSaWxsIHlvdSBnZXQgdG8gcHJvZ3JhbSBtdWNoIG9mIHlvdXIgYXBwbGljYXRpb24gbG9naWMgdXNpbmcgdGhlIHNhbWUgYXBpIChjbGllbnQgb3Igc2VydmVyKSBpbmNsdWRpbmcgcm91dGluZywgcmVuZGVyaW5nLCBkYXRhIGZldGNoaW5nIGFuZCBtb3JlIGFyZSBlYXNpbHkgc2hhcmVkLlxcblxcblJpbGwgYWxzbyB3b3JrcyBwZXJmZWN0bHkgYXMgYSBzdGFuZCBhbG9uZSBbbm9kZWpzXShodHRwczovL25vZGVqcy5vcmcpIHNlcnZlciBvciBhIHN0YW5kIGFsb25lIGJyb3dzZXIgZnJhbWV3b3JrLiBUaGlzIGFsbG93cyBmb3IgZWFzeSBwcm9ncmVzc2l2ZSBlbmhhbmNlbWVudC4gSWYgYWxsIGlzIHdlbGwgdGhlIGJyb3dzZXIgY2FuIGhhbmRsZSBtdWNoIG9mIHlvdXIgYXBwbGljYXRpb24gbG9naWMgYW5kIGlmIEphdmFTY3JpcHQgZmFpbHMgZm9yIGFueSByZWFzb24geW91ciBzZXJ2ZXIga25vd3MgZXhhY3RseSB3aGF0IHRvIGRvLlxcblxcbiMgSG93IGRvZXMgdGhpcyB0aGluZyB3b3JrP1xcbklmIHlvdSBsb29rIGF0IHRoZSBzb3VyY2UgZm9yIFJpbGwgW2hlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9yaWxsLWpzL3JpbGwvdHJlZS9tYXN0ZXIvc3JjKSB5b3Ugd2lsbCBxdWlja2x5IG5vdGljZSB0aGVyZSBpcyBaRVJPIGJyb3dzZXIgc3BlY2lmaWMgY29kZS4gVGhpcyBpcyBhbGwgdGhhbmtzIHRvIFtAcmlsbC9odHRwXShodHRwczovL2dpdGh1Yi5jb20vcmlsbC1qcy9odHRwKSB3aGljaCBpcyBub2RlJ3MgW0hUVFAuY3JlYXRlU2VydmVyXShodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX2h0dHBfY3JlYXRlc2VydmVyX3JlcXVlc3RsaXN0ZW5lcikgcG9ydGVkIHRvIHRoZSBicm93c2VyLlxcblxcbkluIHRoZSBicm93c2VyIGl0IHdvcmtzIGJ5IGxpc3RlbmluZyBmb3IgaW50ZXJuYWwgbGluayBjbGlja3MsIGZvcm0gc3VibWlzc2lvbnMgYW5kIGJyb3dzZXIgaGlzdG9yeSBjaGFuZ2VzLiBJdCB3aWxsIHRoZW4gY3JlYXRlIGEgW1JpbGwgQ29udGV4dF0oaHR0cHM6Ly9yaWxsLnNpdGUvY29udGV4dCNkb2NzKSBmb3IgZWFjaCBvZiB0aGVzZSBldmVudHMgYW5kIGVtaXQgaXQgdGhyb3VnaCB0aGUgcm91dGVyLCBzaW1pbGFyIHRvIGhvdyByZWNlaXZpbmcgYSByZXF1ZXN0IHdvcmtzIGluIFtub2RlanNdKGh0dHBzOi8vbm9kZWpzLm9yZykuXFxuXFxuSXQgc3VwcG9ydHMgZXZlcnl0aGluZyB5b3UnZCBleHBlY3QgZnJvbSBhIGNsaWVudCBzaWRlIFtub2RlanNdKGh0dHBzOi8vbm9kZWpzLm9yZykgc2VydmVyLiBUaGlzIGluY2x1ZGVzIHJlZGlyZWN0cywgcmVmcmVzaGVzLCBjb29raWVzLCBzY3JvbGxpbmcgYW5kIHVybCB1cGRhdGVzIHVzaW5nIHRoZSBbSGlzdG9yeSBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5KS5cXG5cXG4jIEV4YW1wbGVcXG5cXG4jIyMgQ3JlYXRlIGFuIGFwcFxcblxcbmBgYGphdmFzY3JpcHRcXG4vKipcXG4gKiBUaGUgZm9sbG93aW5nIGNvZGUgY2FuIHJ1biAxMDAlIGluIHRoZSBicm93c2VyIG9yIGluIG5vZGVqcy5cXG4gKiBFeGFtcGxlcyB1c2UgZXMyMDE1LzIwMTYgd2l0aCBCYWJlbCBhbmQgSlNYIGJ1dCB0aGlzIGlzIG9wdGlvbmFsLlxcbiAqL1xcblxcbmltcG9ydCByaWxsIGZyb20gJ3JpbGwnXFxuY29uc3QgYXBwID0gcmlsbCgpXFxuYGBgXFxuXFxuIyMjIFNldHVwIG1pZGRsZXdhcmVcXG5cXG5gYGBqYXZhc2NyaXB0XFxuLy8gVW5pdmVyc2FsIGZvcm0gZGF0YSBwYXJzaW5nIG1pZGRsZXdhcmUuXFxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnQHJpbGwvYm9keSdcXG5hcHAudXNlKGJvZHlQYXJzZXIoKSlcXG5cXG4vLyBVbml2ZXJzYWwgcmVhY3QgcmVuZGVyaW5nIG1pZGRsZXdhcmUuXFxuaW1wb3J0IHJlYWN0UmVuZGVyZXIgZnJvbSAnQHJpbGwvcmVhY3QnXFxuYXBwLnVzZShyZWFjdFJlbmRlcmVyKCkpXFxuXFxuLy8gRXhhbXBsZSBMb2dnZXJcXG5hcHAudXNlKGFzeW5jICh7IHJlcSB9LCBuZXh0KT0+IHtcXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGVcXG5cXG4gIC8vIFJpbGwgdXNlcyBwcm9taXNlcyBmb3IgY29udHJvbCBmbG93LlxcbiAgLy8gRVMyMDE2IGFzeW5jIGZ1bmN0aW9ucyB3b3JrIGdyZWF0IGFzIHdlbGwhXFxuICBhd2FpdCBuZXh0KClcXG5cXG4gIGNvbnN0IG1zID0gbmV3IERhdGUgLSBzdGFydFxcbiAgY29uc29sZS5sb2coYCR7cmVxLm1ldGhvZH0gJHtyZXEudXJsfSAtICR7bXN9YClcXG59KVxcbmBgYFxcblxcbiMjIyBTZXR1cCBhIHBhZ2VcXG5cXG5gYGBqYXZhc2NyaXB0XFxuLy8gUmVzcG9uZCB0byBhIEdFVCByZXF1ZXN0LlxcbmFwcC5nZXQoJy90b2RvcycsIGFzeW5jICh7IHJlcyB9KT0+IHtcXG4gIC8vIEZldGNoIGEgdG9kb2xpc3QgZnJvbSBzb21lIHNlcnZpY2UuXFxuICBjb25zdCB0b2RvbGlzdCA9IGF3YWl0IE15VG9kb0xpc3RTZXJ2aWNlLmdldEFsbFRvZG9zKClcXG5cXG4gIC8vIERpcmVjdGx5IHNldCBSZWFjdCB2aXJ0dWFsIGRvbSB0byB0aGUgYm9keSB0aGFua3MgdG8gQHJpbGwvcmVhY3QuXFxuICAvLyAoQ2hlY2tvdXQgQHJpbGwvaHRtbCBmb3IgdW5pdmVyc2FsIGh0bWwgZGlmZmluZykuXFxuICByZXMuYm9keSA9IChcXG4gICAgPGh0bWw+XFxuICAgICAgPGhlYWQ+XFxuICAgICAgICA8dGl0bGU+TXkgQXBwPC90aXRsZT5cXG4gICAgICAgIDxtZXRhIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIiBjb250ZW50PVxcXCJSaWxsIEFwcGxpY2F0aW9uXFxcIj5cXG4gICAgICA8L2hlYWQ+XFxuICAgICAgPGJvZHk+XFxuICAgICAgICA8Zm9ybSBhY3Rpb249XFxcIi9hZGQtdG9kb1xcXCIgbWV0aG9kPVxcXCJQT1NUXFxcIj5cXG4gICAgICAgICAgPGgxPkp1c3QgYSBwbGFpbiBvbGQgZm9ybTwvaDE+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ0b2RvXFxcIi8+XFxuICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIj5BZGQgVG9kbzwvYnV0dG9uPlxcbiAgICAgICAgPC9mb3JtPlxcblxcbiAgICAgICAge3RvZG9saXN0Lmxlbmd0aFxcbiAgICAgICAgICA/IHRvZG9saXN0Lm1hcChyZW5kZXJUb2RvKVxcbiAgICAgICAgICA6ICdObyB0b2RvcyB0byBkaXNwbGF5LidcXG4gICAgICAgIH1cXG4gICAgICAgIDxzY3JpcHQgc3JjPVxcXCIvYXBwLmpzXFxcIi8+XFxuICAgICAgPC9ib2R5PlxcbiAgICA8L2h0bWw+XFxuICApXFxufSlcXG5gYGBcXG5cXG4jIyMgSGFuZGxlIGEgZm9ybSBzdWJtaXNzaW9uXFxuYGBgamF2YXNjcmlwdFxcbi8vIFJlc3BvbmQgdG8gYSBQT1NUIHJlcXVlc3QuXFxuYXBwLnBvc3QoJy9hZGQtdG9kbycsIGFzeW5jICh7IHJlcSwgcmVzIH0pPT4ge1xcbiAgLy8gV2UgaGFuZGxlIGZvcm0gc3VibWlzc2lvbnMgd2l0aCBSaWxsIHRoZSBzYW1lIHdheSBvbmUgd291bGQgd2l0aCBhbnkgb3RoZXIgbm9kZSBmcmFtZXdvcmsuXFxuICAvLyBIZXJlIHdlIGFyZSBzaW1wbHkgYWRkaW5nIHRoZSB0b2RvIHZpYSBzb21lIHNlcnZpY2UuXFxuICBhd2FpdCBNeVRvZG9MaXN0U2VydmljZS5hZGRUb2RvKHsgdGV4dDogcmVxLmJvZHkudG9kbyB9KVxcbiAgLy8gQW5kIHRoZW4gd2UgcmVkaXJlY3QgYmFjayAoc2FtZSBhcyByZXMucmVkaXJlY3QoJy90b2RvcycpKVxcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcXG59KVxcbmBgYFxcblxcbiMjIyBTdGFydCBhcHBcXG5cXG5gYGBqYXZhc2NyaXB0XFxuLy8gU3RhcnQgYSByZWd1bGFyIGh0dHAgc2VydmVyLlxcbi8vIEluIHRoZSBicm93c2VyIGFueSBmb3JtIHN1Ym1pc3Npb25zIG9yIGxpbmsgY2xpY2tzIHdpbGwgaW50ZXJjZXB0ZWQgYnkgQHJpbGwvaHR0cC5cXG5hcHAubGlzdGVuKHsgcG9ydDogODAgfSlcXG5gYGBcXG5cXG4jIyBTZWUgQWxzb1xcblxcbiogW2lzYnJvd3Nlcl0oaHR0cHM6Ly9naXRodWIuY29tL0R5bGFuUGllcmNleS9pc2Jyb3dzZXIpIC0gQSBicm93c2VyaWZ5IHRyYW5zZm9ybSB0byByZW1vdmUgc2VydmVyLXNpZGUgY29kZS5cXG4qIFtpc29tb3JwaGljLWZldGNoXShodHRwczovL2dpdGh1Yi5jb20vbWF0dGhldy1hbmRyZXdzL2lzb21vcnBoaWMtZmV0Y2gpIC0gVW5pdmVyc2FsIGh0dHAgcmVxdWVzdHMgdXNpbmcgV0hBVFdHIGZldGNoLlxcbiogW2lzb21vcnBoaWMtZm9ybS1kYXRhXShodHRwczovL2dpdGh1Yi5jb20vZm9ybS1kYXRhL2lzb21vcnBoaWMtZm9ybS1kYXRhKSAtIFNlbmQgbXVsdGlwYXJ0IGZvcm0gZGF0YSB1bml2ZXJzYWxseSAoYWJsZSB0byBzZW5kIGZpbGVzIGFuZCB3b3JrcyB3aXRoIGZldGNoKS5cXG4qIFtzY3JvbGwtYmVoYXZpb3JdKGh0dHBzOi8vZ2l0aHViLmNvbS9EeWxhblBpZXJjZXkvc2Nyb2xsLWJlaGF2aW91cikgLSBAcmlsbC9odHRwIHdpbGwgYXV0b21hdGljYWxseSB0cnkgdG8gdXNlIHRoZSBcXFwic21vb3RoXFxcIiBbc2Nyb2xsLWJlaGF2aW9yXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvc2Nyb2xsLWJlaGF2aW9yKSB3aGVuIHNjcm9sbGluZyB0byB0YXJnZXRzIG9uIGxpbmsgY2xpY2tzLiBUaGlzIHdpbGwgcG9seWZpbGwgdGhhdCBhY3Jvc3MgbW9kZXJuIGJyb3dzZXJzLlxcbiogW3N1Ym1pdC1mb3JtXShodHRwczovL2dpdGh1Yi5jb20vRHlsYW5QaWVyY2V5L3N1Ym1pdC1mb3JtKSAtIE1hbnVhbGx5IHRyaWdnZXIgUmlsbCBuYXZpZ2F0aW9uIGluIHRoZSBicm93c2VyLlxcblxcbiMjIFByaW9yIEFydFxcblxcbiogW2tvYS1jbGllbnRdKGh0dHBzOi8vZ2l0aHViLmNvbS9rZW50anMva29hLWNsaWVudCkgLSBLb2EgY2xvbmUgdGhhdCBydW5zIGluIHRoZSBicm93c2VyLCBpbnNwaXJlZCB0aGlzIHBhY2thZ2UuXFxuKiBbbW9ub3JvdXRlcl0oaHR0cHM6Ly9naXRodWIuY29tL21hdHRoZXd3aXRoYW5tL21vbm9yb3V0ZXIpIC0gQW5vdGhlciBpc29tb3JwaGljIHJvdXRlciB0aGF0IHBhcnRpYWxseSBpbnNwaXJlZCB0aGlzIHBhY2thZ2UuXFxuXFxuIyMgQ29udHJpYnV0aW9uc1xcblxcbiogVXNlIGBucG0gdGVzdGAgdG8gcnVuIHRlc3RzLlxcblxcbiMjIExpY2Vuc2VcXG5cXG5bTUlUXShodHRwczovL3RsZHJsZWdhbC5jb20vbGljZW5zZS9taXQtbGljZW5zZSlcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JpbGwvUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLzNwdGpHMmdLX2cuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvYXNzZXRzL2xvZ28uc3ZnXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvdGFnbGlicy9jb3JlL2luY2x1ZGUtdGFnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWFya28vc3JjL3RhZ2xpYnMvY29yZS9pbmNsdWRlLXRhZ1wiXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Nzcy9wYWdlLmNzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL29jZWFuLmNzc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjI2IC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpLFxuICAgIG1vZHVsZV9tYXJrZG93biA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvbWFya2Rvd25cIiksXG4gICAgbWFya2Rvd24gPSBtb2R1bGVfbWFya2Rvd24uZGVmYXVsdCB8fCBtb2R1bGVfbWFya2Rvd24sXG4gICAgbWFya29faGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiksXG4gICAgbWFya29fc3RyID0gbWFya29faGVscGVycy5zLFxuICAgIG1hcmtvX2xvYWRUYWcgPSBtYXJrb19oZWxwZXJzLnQsXG4gICAgYXdhaXRfdGFnID0gbWFya29fbG9hZFRhZyhyZXF1aXJlKFwibWFya28vc3JjL3RhZ2xpYnMvYXN5bmMvYXdhaXQtdGFnXCIpKSxcbiAgICBhcHBfcGFnZV90ZW1wbGF0ZSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL2FwcC1wYWdlLm1hcmtvXCIpLFxuICAgIGFwcF9wYWdlX3RhZyA9IG1hcmtvX2xvYWRUYWcoYXBwX3BhZ2VfdGVtcGxhdGUpO1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCkge1xuICB2YXIgZGF0YSA9IGlucHV0O1xuXG4gIG91dC53KFwiPGRpdj5cIik7XG5cbiAgYXBwX3BhZ2VfdGFnKHtcbiAgICAgIHJlbmRlckJvZHk6IGZ1bmN0aW9uIHJlbmRlckJvZHkob3V0KSB7XG4gICAgICAgIG91dC53KFwiPHNlY3Rpb24gaWQ9XFxcImRvY3NcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlwiKTtcblxuICAgICAgICBhd2FpdF90YWcoe1xuICAgICAgICAgICAgX2RhdGFQcm92aWRlcjogaW5wdXQucGVuZGluZ0NvbnRlbnQsXG4gICAgICAgICAgICBfbmFtZTogXCJpbnB1dC5wZW5kaW5nQ29udGVudFwiLFxuICAgICAgICAgICAgcmVuZGVyQm9keTogZnVuY3Rpb24gcmVuZGVyQm9keShvdXQsIGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgb3V0LncobWFya29fc3RyKG1hcmtkb3duKGNvbnRlbnQpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgb3V0KTtcblxuICAgICAgICBvdXQudyhcIjwvZGl2Pjwvc2VjdGlvbj5cIik7XG4gICAgICB9XG4gICAgfSwgb3V0KTtcblxuICBvdXQudyhcIjwvZGl2PlwiKTtcbn1cblxubWFya29fdGVtcGxhdGUuXyA9IHJlbmRlcjtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHtcbiAgICB0YWdzOiBbXG4gICAgICBcIm1hcmtvL3NyYy90YWdsaWJzL2FzeW5jL2F3YWl0LXRhZ1wiLFxuICAgICAgXCIuLi9jb21wb25lbnRzL2FwcC1wYWdlLm1hcmtvXCJcbiAgICBdXG4gIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC92aWV3cy9kb2NzLm1hcmtvXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvdGFnbGlicy9hc3luYy9hd2FpdC10YWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtYXJrby9zcmMvdGFnbGlicy9hc3luYy9hd2FpdC10YWdcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7OztBQzdEQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBOzs7Ozs7QUN4Q0E7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzNDQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNEQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==