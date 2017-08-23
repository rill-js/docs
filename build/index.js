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

  out.w("<div id=\"page\"><a href=\"https://github.com/rill-js/rill\"><img style=\"position:absolute;top:0;left:0;border:0;\" src=\"https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png\"></a><section id=\"top\"><div id=\"menu\"><a href=\"/#top\" id=\"toggle\">&#9776;</a><ul><li><b>Documentation</b><hr></li><li><a href=\"/docs/application#docs\">Application</a></li><li><a href=\"/docs/context#docs\">Context</a></li><li><a href=\"/docs/request#docs\">Request</a></li><li><a href=\"/docs/response#docs\">Response</a></li><li><br><b>Community</b><hr></li><li><a href=\"/#community\">Links</a></li><li><a href=\"/#articles\">Articles</a></li></ul></div><div id=\"heading\"><div id=\"logo\"><a href=\"/#docs\"><img" +
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
}).get('/', __WEBPACK_IMPORTED_MODULE_4__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_8__index_marko___default.a)).get('/docs/:section?', function (ctx, next) {
  var load = ctx.load,
      locals = ctx.locals,
      req = ctx.req;

  var section = req.params.section || 'application';
  if (!['application', 'context', 'request', 'response'].includes(section)) return;
  locals.ctx = ctx;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzg2YTZjMDYxNGVkOGE5MWEwZmYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL2h0bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2FwcC91dGlsaXRpZXMvbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYXBwLXBhZ2UubWFya28iLCJ3ZWJwYWNrOi8vL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9mcmVzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2V0YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZmV0Y2hlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9ib2R5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvdW5oYW5kbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvcmVkaXJlY3RcIiIsIndlYnBhY2s6Ly8vYXBwL3ZpZXdzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9tYXJrb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJpbGwvcGFja2FnZS5qc29uXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9hcHAvdmlld3MvaW5kZXgubWFya28iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL2NvbXBvbmVudHMvaGVscGVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmlsbC9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrby9zcmMvdGFnbGlicy9jb3JlL2luY2x1ZGUtdGFnXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nzcy9wYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL3N0eWxlcy9vY2Vhbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZpZXdzL2RvY3MubWFya28iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL3RhZ2xpYnMvYXN5bmMvYXdhaXQtdGFnXCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzg2YTZjMDYxNGVkOGE5MWEwZmYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtvL3NyYy9odG1sXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJpbGxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9sb2FkZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9sb2FkZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCdcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0J1xuaW1wb3J0IGJhc2ggZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaCdcbmltcG9ydCBodG1sIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbCdcbmltcG9ydCBqYXZhc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnXG5cbi8vIFNldHVwIGhpZ2hsaWdodC5qcyBsYW5ndWFnZXMuXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2Jhc2gnLCBiYXNoKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdjb25zb2xlJywgYmFzaClcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnaHRtbCcsIGh0bWwpXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ3htbCcsIGh0bWwpXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2pzJywgamF2YXNjcmlwdClcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnamF2YXNjcmlwdCcsIGphdmFzY3JpcHQpXG5cbi8vIFNldHVwIGN1c3RvbSByZW5kZXJlciBmb3IgbWFya2VkIHdoaWNoIHVzZXMgaGlnaGxpZ2h0LmpzIGZvciBzeW50YXggaGlnaGxpZ2h0aW5nLlxuY29uc3QgcmVuZGVyZXIgPSBuZXcgbWFya2VkLlJlbmRlcmVyKClcbnJlbmRlcmVyLmNvZGUgPSAoY29kZSwgbGFuZykgPT4ge1xuICBsYW5nID0gbGFuZy50b0xvd2VyQ2FzZSgpXG4gIGNvZGUgPSBobGpzLmhpZ2hsaWdodChsYW5nLCBjb2RlLCB0cnVlKS52YWx1ZVxuICByZXR1cm4gYDxwcmU+PGNvZGUgY2xhc3M9XCJobGpzICR7bGFuZ31cIj4ke2NvZGV9PC9jb2RlPjwvcHJlPmBcbn1cbm1hcmtlZC5zZXRPcHRpb25zKHsgcmVuZGVyZXIgfSlcblxuLyoqXG4gKiBQYXJzZXMgdGV4dCBhcyBtYXJrZG93biB1c2luZyBtYXJrZWQuanMgYW5kIHRoZSBjdXN0b20gcmVuZGVyZXIgYWJvdmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcmtkb3duICh0ZXh0KSB7XG4gIHJldHVybiBtYXJrZWQodGV4dClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvdXRpbGl0aWVzL21hcmtkb3duLmpzIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjI2IC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpLFxuICAgIG1vZHVsZV9zdmdMb2dvID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9sb2dvLnN2Z1wiKSxcbiAgICBzdmdMb2dvID0gbW9kdWxlX3N2Z0xvZ28uZGVmYXVsdCB8fCBtb2R1bGVfc3ZnTG9nbyxcbiAgICBtYXJrb19oZWxwZXJzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVyc1wiKSxcbiAgICBtYXJrb19hdHRyID0gbWFya29faGVscGVycy5hLFxuICAgIG1hcmtvX2xvYWRUYWcgPSBtYXJrb19oZWxwZXJzLnQsXG4gICAgaW5jbHVkZV90YWcgPSBtYXJrb19sb2FkVGFnKHJlcXVpcmUoXCJtYXJrby9zcmMvdGFnbGlicy9jb3JlL2luY2x1ZGUtdGFnXCIpKTtcblxucmVxdWlyZShcIi4uL2Nzcy9wYWdlLmNzc1wiKTtcblxucmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL29jZWFuLmNzc1wiKTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBvdXQudyhcIjxkaXYgaWQ9XFxcInBhZ2VcXFwiPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9yaWxsLWpzL3JpbGxcXFwiPjxpbWcgc3R5bGU9XFxcInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtib3JkZXI6MDtcXFwiIHNyYz1cXFwiaHR0cHM6Ly9jYW1vLmdpdGh1YnVzZXJjb250ZW50LmNvbS81NjdjM2E0OGQ3OTZlMmZjMDZlYTgwNDA5Y2M5ZGQ4MmJmNzE0NDM0LzY4NzQ3NDcwNzMzYTJmMmY3MzMzMmU2MTZkNjE3YTZmNmU2MTc3NzMyZTYzNmY2ZDJmNjc2OTc0Njg3NTYyMmY3MjY5NjI2MjZmNmU3MzJmNjY2ZjcyNmI2ZDY1NWY2YzY1NjY3NDVmNjQ2MTcyNmI2MjZjNzU2NTVmMzEzMjMxMzYzMjMxMmU3MDZlNjdcXFwiIGFsdD1cXFwiRm9yayBtZSBvbiBHaXRIdWJcXFwiIGRhdGEtY2Fub25pY2FsLXNyYz1cXFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2dpdGh1Yi9yaWJib25zL2ZvcmttZV9sZWZ0X2RhcmtibHVlXzEyMTYyMS5wbmdcXFwiPjwvYT48c2VjdGlvbiBpZD1cXFwidG9wXFxcIj48ZGl2IGlkPVxcXCJtZW51XFxcIj48YSBocmVmPVxcXCIvI3RvcFxcXCIgaWQ9XFxcInRvZ2dsZVxcXCI+JiM5Nzc2OzwvYT48dWw+PGxpPjxiPkRvY3VtZW50YXRpb248L2I+PGhyPjwvbGk+PGxpPjxhIGhyZWY9XFxcIi9kb2NzL2FwcGxpY2F0aW9uI2RvY3NcXFwiPkFwcGxpY2F0aW9uPC9hPjwvbGk+PGxpPjxhIGhyZWY9XFxcIi9kb2NzL2NvbnRleHQjZG9jc1xcXCI+Q29udGV4dDwvYT48L2xpPjxsaT48YSBocmVmPVxcXCIvZG9jcy9yZXF1ZXN0I2RvY3NcXFwiPlJlcXVlc3Q8L2E+PC9saT48bGk+PGEgaHJlZj1cXFwiL2RvY3MvcmVzcG9uc2UjZG9jc1xcXCI+UmVzcG9uc2U8L2E+PC9saT48bGk+PGJyPjxiPkNvbW11bml0eTwvYj48aHI+PC9saT48bGk+PGEgaHJlZj1cXFwiLyNjb21tdW5pdHlcXFwiPkxpbmtzPC9hPjwvbGk+PGxpPjxhIGhyZWY9XFxcIi8jYXJ0aWNsZXNcXFwiPkFydGljbGVzPC9hPjwvbGk+PC91bD48L2Rpdj48ZGl2IGlkPVxcXCJoZWFkaW5nXFxcIj48ZGl2IGlkPVxcXCJsb2dvXFxcIj48YSBocmVmPVxcXCIvI2RvY3NcXFwiPjxpbWdcIiArXG4gICAgbWFya29fYXR0cihcInNyY1wiLCBzdmdMb2dvKSArXG4gICAgXCI+PC9hPjwvZGl2PjwvZGl2Pjwvc2VjdGlvbj5cIik7XG5cbiAgaW5jbHVkZV90YWcoe1xuICAgICAgX3RhcmdldDogaW5wdXRcbiAgICB9LCBvdXQpO1xuXG4gIG91dC53KFwiPGRpdiBpZD1cXFwibG9hZGluZy1zY3JlZW5cXFwiPjxkaXYgY2xhc3M9XFxcImxvYWRlclxcXCI+PC9kaXY+PC9kaXY+PHNjcmlwdD5cXG4gICAgIWZ1bmN0aW9uKGEscCxpLGQsbyxjLHMpe2EuR29vZ2xlQW5hbHl0aWNzT2JqZWN0PWk7YVtpXXx8KGFbaV09ZnVuY3Rpb24oKXtcXG4gICAgKGFbaV0ucT1hW2ldLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9KTthW2ldLmw9K25ldyBEYXRlO2M9cC5jcmVhdGVFbGVtZW50KGQpO1xcbiAgICBzPXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZClbMF07Yy5zcmM9bztzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGMscyl9XFxuICAgICh3aW5kb3csZG9jdW1lbnQsJ2dhJywnc2NyaXB0JywnLy93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJyk7XFxuICAgIGdhKCdjcmVhdGUnLCAnVUEtNTMyMDIxMzMtMicsICdhdXRvJyk7XFxuICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XFxuICA8L3NjcmlwdD48L2Rpdj5cIik7XG59XG5cbm1hcmtvX3RlbXBsYXRlLl8gPSByZW5kZXI7XG5cbm1hcmtvX3RlbXBsYXRlLm1ldGEgPSB7XG4gICAgdGFnczogW1xuICAgICAgXCJtYXJrby9zcmMvdGFnbGlicy9jb3JlL2luY2x1ZGUtdGFnXCJcbiAgICBdXG4gIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL2FwcC1wYWdlLm1hcmtvXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBtcyBmcm9tICdtcydcbmltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBoZWxtZXQgZnJvbSAnQHJpbGwvaGVsbWV0J1xuaW1wb3J0IGZyZXNoIGZyb20gJ0ByaWxsL2ZyZXNoJ1xuaW1wb3J0IGV0YWcgZnJvbSAnQHJpbGwvZXRhZydcbmltcG9ydCBjb21wcmVzcyBmcm9tICdAcmlsbC9jb21wcmVzcydcbmltcG9ydCBzZXJ2ZSBmcm9tICdAcmlsbC9zdGF0aWMnXG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnQHJpbGwvcHJvZ3Jlc3MnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0ByaWxsL2xvZ2dlcidcbmltcG9ydCBleHBvc2UgZnJvbSAnQHJpbGwvZXhwb3NlJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHJpbGwvZmV0Y2hlcidcbmltcG9ydCBzZXNzaW9uIGZyb20gJ0ByaWxsL3Nlc3Npb24nXG5pbXBvcnQgbG9hZGVyIGZyb20gJ0ByaWxsL2xvYWRlcidcbmltcG9ydCBib2R5IGZyb20gJ0ByaWxsL2JvZHknXG5pbXBvcnQgdW5oYW5kbGVkIGZyb20gJ0ByaWxsL3VuaGFuZGxlZCdcbmltcG9ydCByZWRpcmVjdCBmcm9tICdAcmlsbC9yZWRpcmVjdCdcbmltcG9ydCB2aWV3cyBmcm9tICcuL3ZpZXdzJ1xuXG5jb25zdCBtZXNzYWdlID0gJ0FwcCBTdGFydGVkJ1xuY29uc29sZS50aW1lKG1lc3NhZ2UpXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpXG4gIC51c2UoaGVsbWV0KGdsb2JhbC5TRUNVUklUWSkpXG4gIC51c2UoYm9keSgpKVxuICAudXNlKHNlc3Npb24oKSlcbiAgLnVzZShsb2FkZXIoKSlcbiAgLnVzZShsb2dnZXIoKSlcbiAgLnVzZShmcmVzaCgpKVxuICAudXNlKGV0YWcoKSlcbiAgLnVzZShjb21wcmVzcygpKVxuICAuZ2V0KHNlcnZlKCdidWlsZC9wdWJsaWMnLCB7IGd6aXA6IHRydWUsIGNhY2hlOiBgJHttcygnMzAgZGF5cycpfTsgaW1tdXRhYmxlYCB9KSlcbiAgLnVzZShwcm9ncmVzcyh7IHNwaW5uZXI6IGZhbHNlLCBjb2xvcjogJyMwMDlmZTInIH0pKVxuICAudXNlKGZldGNoZXIoKSlcbiAgLnVzZShleHBvc2UoKSlcbiAgLmdldCh2aWV3cylcbiAgLmdldCh1bmhhbmRsZWQocmVkaXJlY3QoJy8nKSkpXG4gIC5saXN0ZW4oKCkgPT4ge1xuICAgIGNvbnNvbGUudGltZUVuZChtZXNzYWdlKVxuICAgIGNvbnNvbGUubG9nKCcnKVxuICB9KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2hlbG1ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2hlbG1ldFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2ZyZXNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZnJlc2hcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXRhZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V0YWdcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvY29tcHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zdGF0aWNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9zdGF0aWNcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcHJvZ3Jlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wcm9ncmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9sb2dnZXJcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXhwb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2ZldGNoZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9mZXRjaGVyXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Nlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9zZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2JvZHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9ib2R5XCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3VuaGFuZGxlZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9yZWRpcmVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3JlZGlyZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCByb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBwYWdlIGZyb20gJ0ByaWxsL3BhZ2UnXG5pbXBvcnQgcmVuZGVyIGZyb20gJ0ByaWxsL21hcmtvJ1xuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICdAcmlsbC9sb2FkZXInXG5pbXBvcnQgeyBkZXNjcmlwdGlvbiwgYXV0aG9yLCBrZXl3b3JkcyB9IGZyb20gJ3JpbGwvcGFja2FnZS5qc29uJ1xuaW1wb3J0IGltZ0Zhdmljb24gZnJvbSAnLi4vYXNzZXRzL2Zhdmljb24ucG5nJ1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaW5kZXgubWFya28nXG5pbXBvcnQgZG9jc1BhZ2UgZnJvbSAnLi9kb2NzLm1hcmtvJ1xuXG4vLyBSZWdpc3RlciBkb2MgbG9hZGVyLiAoZG9lcyBjYWNoaW5nIGFuZCBoeWRyYXRpbmcpLlxuLy8gTG9hZHMgdGhlIGRvY3MgZnJvbSBnaXRodWIgZXZlcnkgMTIgaG91cnMuXG5yZWdpc3Rlcih7IG5hbWU6ICdkb2NzJywgdHRsOiAnMTIgaG91cnMnIH0sIGFzeW5jICh7IGZldGNoIH0sIHNlY3Rpb24pID0+IHtcbiAgaWYgKHNlY3Rpb24gPT09ICdhcHBsaWNhdGlvbicpIHNlY3Rpb24gPSAnaW5kZXgnXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9yaWxsLWpzL3JpbGwvbWFzdGVyL2RvY3MvYXBpLyR7c2VjdGlvbn0ubWRgKVxuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG59KVxuXG4vLyBFeHBvc2UgYXBwIHJvdXRlcy5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcigpXG4gIC5nZXQocGFnZVxuICAgIC5odG1sKHsgbGFuZzogJ2VuJyB9KVxuICAgIC50aXRsZSgnUmlsbCBEb2N1bWVudGF0aW9uJylcbiAgICAubWV0YSh7ICdodHRwLWVxdWl2JzogJ1gtVUEtQ29tcGF0aWJsZScsIGNvbnRlbnQ6ICdJRT1lZGdlLGNocm9tZT0xJyB9KVxuICAgIC5tZXRhKHsgbmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDogJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnIH0pXG4gICAgLm1ldGEoeyBuYW1lOiAnYXV0aG9yJywgY29udGVudDogYXV0aG9yLm5hbWUgfSlcbiAgICAubWV0YSh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IGRlc2NyaXB0aW9uIH0pXG4gICAgLm1ldGEoeyBuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiBrZXl3b3Jkcy5qb2luKCcsJykgfSlcbiAgICAubWV0YSh7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjMDBhMWRmJyB9KVxuICAgIC5saW5rKHsgcmVsOiAnc2hvcnRjdXQgaWNvbicsIGhyZWY6IGltZ0Zhdmljb24gfSlcbiAgICAubGluayh7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiAnL2luZGV4LmNzcycgfSlcbiAgICAuc2NyaXB0KHsgYXN5bmM6IHRydWUsIHNyYzogJy9pbmRleC5qcycgfSlcbiAgKVxuICAuZ2V0KCcvKicsICh7IHJlcyB9LCBuZXh0KSA9PiB7XG4gICAgcmVzLmFwcGVuZCgnTGluaycsICc8L2luZGV4LmpzPjsgcmVsPXByZWxvYWQ7IGFzPXNjcmlwdDsnKVxuICAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9pbmRleC5jc3M+OyByZWw9cHJlbG9hZDsgYXM9c3R5bGU7JylcbiAgICByZXR1cm4gbmV4dCgpXG4gIH0pXG4gIC5nZXQoJy8nLCByZW5kZXIoaG9tZVBhZ2UpKVxuICAuZ2V0KCcvZG9jcy86c2VjdGlvbj8nLCAoY3R4LCBuZXh0KSA9PiB7XG4gICAgY29uc3QgeyBsb2FkLCBsb2NhbHMsIHJlcSB9ID0gY3R4XG4gICAgY29uc3Qgc2VjdGlvbiA9IHJlcS5wYXJhbXMuc2VjdGlvbiB8fCAnYXBwbGljYXRpb24nXG4gICAgaWYgKCFbJ2FwcGxpY2F0aW9uJywgJ2NvbnRleHQnLCAncmVxdWVzdCcsICdyZXNwb25zZSddLmluY2x1ZGVzKHNlY3Rpb24pKSByZXR1cm5cbiAgICBsb2NhbHMuY3R4ID0gY3R4XG4gICAgbG9jYWxzLnBlbmRpbmdDb250ZW50ID0gbG9hZCgnZG9jcycsIHNlY3Rpb24pXG4gICAgcmV0dXJuIG5leHQoKVxuICB9LCByZW5kZXIoZG9jc1BhZ2UpKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC92aWV3cy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcGFnZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3BhZ2VcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvbWFya29cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9tYXJrb1wiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyaWxsL3BhY2thZ2UuanNvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJpbGwvcGFja2FnZS5qc29uXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIvV2pTVk51dThDMC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9hc3NldHMvZmF2aWNvbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvbXBpbGVkIHVzaW5nIG1hcmtvQDQuNC4yNiAtIERPIE5PVCBFRElUXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1hcmtvX3RlbXBsYXRlID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2h0bWxcIikudChfX2ZpbGVuYW1lKSxcbiAgICBtYXJrb19jb21wb25lbnQgPSB7XG4gICAgICAgIG9uQ3JlYXRlOiBmdW5jdGlvbigpIHt9XG4gICAgICB9LFxuICAgIGNvbXBvbmVudHNfaGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvY29tcG9uZW50cy9oZWxwZXJzXCIpLFxuICAgIG1hcmtvX3JlZ2lzdGVyQ29tcG9uZW50ID0gY29tcG9uZW50c19oZWxwZXJzLnJjLFxuICAgIG1hcmtvX2NvbXBvbmVudFR5cGUgPSBtYXJrb19yZWdpc3RlckNvbXBvbmVudChcIi9AcmlsbC9ib2lsZXJwbGF0ZS13ZWJwYWNrLW1hcmtvJDAuMC4xL2FwcC92aWV3cy9pbmRleC5tYXJrb1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiAgICB9KSxcbiAgICBtYXJrb19yZW5kZXJlciA9IGNvbXBvbmVudHNfaGVscGVycy5yLFxuICAgIG1hcmtvX2RlZmluZUNvbXBvbmVudCA9IGNvbXBvbmVudHNfaGVscGVycy5jLFxuICAgIG1vZHVsZV9tYXJrZG93biA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvbWFya2Rvd25cIiksXG4gICAgbWFya2Rvd24gPSBtb2R1bGVfbWFya2Rvd24uZGVmYXVsdCB8fCBtb2R1bGVfbWFya2Rvd24sXG4gICAgbW9kdWxlX2NvbnRlbnQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL3JpbGwvUkVBRE1FLm1kXCIpLFxuICAgIGNvbnRlbnQgPSBtb2R1bGVfY29udGVudC5kZWZhdWx0IHx8IG1vZHVsZV9jb250ZW50LFxuICAgIG1hcmtvX2hlbHBlcnMgPSByZXF1aXJlKFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIpLFxuICAgIG1hcmtvX3N0ciA9IG1hcmtvX2hlbHBlcnMucyxcbiAgICBhcHBfcGFnZV90ZW1wbGF0ZSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL2FwcC1wYWdlLm1hcmtvXCIpLFxuICAgIG1hcmtvX2xvYWRUYWcgPSBtYXJrb19oZWxwZXJzLnQsXG4gICAgYXBwX3BhZ2VfdGFnID0gbWFya29fbG9hZFRhZyhhcHBfcGFnZV90ZW1wbGF0ZSksXG4gICAgbWFya29fYXR0ciA9IG1hcmtvX2hlbHBlcnMuYTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQsIF9fY29tcG9uZW50LCBjb21wb25lbnQsIHN0YXRlKSB7XG4gIHZhciBkYXRhID0gaW5wdXQ7XG5cbiAgb3V0LncoXCI8ZGl2XCIgK1xuICAgIG1hcmtvX2F0dHIoXCJpZFwiLCBfX2NvbXBvbmVudC5pZCkgK1xuICAgIFwiPlwiKTtcblxuICBhcHBfcGFnZV90YWcoe1xuICAgICAgcmVuZGVyQm9keTogZnVuY3Rpb24gcmVuZGVyQm9keShvdXQpIHtcbiAgICAgICAgb3V0LncoXCI8c2VjdGlvbiBpZD1cXFwiZG9jc1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+PGgxPldoYXQgaXMgUmlsbD88L2gxPlwiICtcbiAgICAgICAgICBtYXJrb19zdHIobWFya2Rvd24oY29udGVudCkpICtcbiAgICAgICAgICBcIjwvZGl2Pjwvc2VjdGlvbj5cIik7XG4gICAgICB9XG4gICAgfSwgb3V0KTtcblxuICBvdXQudyhcIjwvZGl2PlwiKTtcbn1cblxubWFya29fdGVtcGxhdGUuXyA9IG1hcmtvX3JlbmRlcmVyKHJlbmRlciwge1xuICAgIHR5cGU6IG1hcmtvX2NvbXBvbmVudFR5cGVcbiAgfSwgbWFya29fY29tcG9uZW50KTtcblxubWFya29fdGVtcGxhdGUuQ29tcG9uZW50ID0gbWFya29fZGVmaW5lQ29tcG9uZW50KG1hcmtvX2NvbXBvbmVudCwgbWFya29fdGVtcGxhdGUuXyk7XG5cbm1hcmtvX3RlbXBsYXRlLm1ldGEgPSB7XG4gICAgZGVwczogW1xuICAgICAge1xuICAgICAgICAgIHR5cGU6IFwicmVxdWlyZVwiLFxuICAgICAgICAgIHBhdGg6IFwiLi9pbmRleC5tYXJrb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHRhZ3M6IFtcbiAgICAgIFwiLi4vY29tcG9uZW50cy9hcHAtcGFnZS5tYXJrb1wiXG4gICAgXVxuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvaW5kZXgubWFya29cbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9jb21wb25lbnRzL2hlbHBlcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtYXJrby9zcmMvY29tcG9uZW50cy9oZWxwZXJzXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtlZFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanMvbGliL2hpZ2hsaWdodFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0XCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9iYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbFwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhc2NyaXB0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YXNjcmlwdFwiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxIGFsaWduPVxcXCJjZW50ZXJcXFwiPlxcbiAgPCEtLSBMb2dvIC0tPlxcbiAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9yaWxsLnNpdGVcXFwiIGFsdD1cXFwiUmlsbFxcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5yYXdnaXQuY29tL3JpbGwtanMvcmlsbC9tYXN0ZXIvUmlsbC1Mb2dvLnN2Z1xcXCIgd2lkdGg9XFxcIjMwMFxcXCIgYWx0PVxcXCJSaWxsIExvZ29cXFwiLz5cXG4gIDwvYT5cXG5cXG4gIDxici8+XFxuXFxuICA8IS0tIFN0YWJpbGl0eSAtLT5cXG4gIDxhIGhyZWY9XFxcImh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZG9jdW1lbnRhdGlvbi5odG1sI2RvY3VtZW50YXRpb25fc3RhYmlsaXR5X2luZGV4XFxcIj5cXG4gICAgPGltZyBzcmM9XFxcImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vYmFkZ2Uvc3RhYmlsaXR5LXN0YWJsZS1icmlnaHRncmVlbi5zdmc/c3R5bGU9ZmxhdC1zcXVhcmVcXFwiIGFsdD1cXFwiQVBJIHN0YWJpbGl0eVxcXCIvPlxcbiAgPC9hPlxcbiAgPCEtLSBTdGFuZGFyZCAtLT5cXG4gIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3Mvc3RhbmRhcmRcXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9iYWRnZS9jb2RlJTIwc3R5bGUtc3RhbmRhcmQtYnJpZ2h0Z3JlZW4uc3ZnP3N0eWxlPWZsYXQtc3F1YXJlXFxcIiBhbHQ9XFxcIlN0YW5kYXJkXFxcIi8+XFxuICA8L2E+XFxuICA8IS0tIE5QTSB2ZXJzaW9uIC0tPlxcbiAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9ucG1qcy5vcmcvcGFja2FnZS9yaWxsXFxcIj5cXG4gICAgPGltZyBzcmM9XFxcImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vbnBtL3YvcmlsbC5zdmc/c3R5bGU9ZmxhdC1zcXVhcmVcXFwiIGFsdD1cXFwiTlBNIHZlcnNpb25cXFwiLz5cXG4gIDwvYT5cXG4gIDwhLS0gVHJhdmlzIGJ1aWxkIC0tPlxcbiAgPGEgaHJlZj1cXFwiaHR0cHM6Ly90cmF2aXMtY2kub3JnL3JpbGwtanMvcmlsbFxcXCI+XFxuICA8aW1nIHNyYz1cXFwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby90cmF2aXMvcmlsbC1qcy9yaWxsLnN2Zz9zdHlsZT1mbGF0LXNxdWFyZVxcXCIgYWx0PVxcXCJCdWlsZCBzdGF0dXNcXFwiLz5cXG4gIDwvYT5cXG4gIDwhLS0gQ292ZXJhbGxzIGNvdmVyYWdlIC0tPlxcbiAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9jb3ZlcmFsbHMuaW8vZ2l0aHViL3JpbGwtanMvcmlsbFxcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJodHRwczovL2ltZy5zaGllbGRzLmlvL2NvdmVyYWxscy9yaWxsLWpzL3JpbGwuc3ZnP3N0eWxlPWZsYXQtc3F1YXJlXFxcIiBhbHQ9XFxcIlRlc3QgQ292ZXJhZ2VcXFwiLz5cXG4gIDwvYT5cXG4gIDwhLS0gRmlsZSBzaXplIC0tPlxcbiAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL3JpbGwtanMvcmlsbC9ibG9iL21hc3Rlci9kaXN0L3JpbGwuanNcXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiaHR0cHM6Ly9iYWRnZS1zaXplLmhlcm9rdWFwcC5jb20vcmlsbC1qcy9yaWxsL21hc3Rlci9kaXN0L3JpbGwuanM/c3R5bGU9ZmxhdC1zcXVhcmVcXFwiIGFsdD1cXFwiRmlsZSBzaXplXFxcIi8+XFxuICA8L2E+XFxuICA8IS0tIERvd25sb2FkcyAtLT5cXG4gIDxhIGhyZWY9XFxcImh0dHBzOi8vbnBtanMub3JnL3BhY2thZ2UvcmlsbFxcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJodHRwczovL2ltZy5zaGllbGRzLmlvL25wbS9kbS9yaWxsLnN2Zz9zdHlsZT1mbGF0LXNxdWFyZVxcXCIgYWx0PVxcXCJEb3dubG9hZHNcXFwiLz5cXG4gIDwvYT5cXG4gIDwhLS0gR2l0dGVyIGNoYXQgLS0+XFxuICA8YSBocmVmPVxcXCJodHRwczovL2dpdHRlci5pbS9yaWxsLWpzL3JpbGxcXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9naXR0ZXIvcm9vbS9yaWxsLWpzL3JpbGwuc3ZnP3N0eWxlPWZsYXQtc3F1YXJlXFxcIiBhbHQ9XFxcIkdpdHRlciBDaGF0XFxcIi8+XFxuICA8L2E+XFxuICA8IS0tIFNhdWNlbGFicyAtLT5cXG4gIDxhIGhyZWY9XFxcImh0dHBzOi8vc2F1Y2VsYWJzLmNvbS91L3JpbGwtanNcXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiaHR0cHM6Ly9zYXVjZWxhYnMuY29tL2Jyb3dzZXItbWF0cml4L3JpbGwtanMuc3ZnXFxcIiBhbHQ9XFxcIlNhdWNlIFRlc3QgU3RhdHVzXFxcIi8+XFxuICA8L2E+XFxuPC9oMT5cXG5cXG5FeHByZXNzaXZlIEhUVFAgbWlkZGxld2FyZSBmb3IgW25vZGVqc10oaHR0cHM6Ly9ub2RlanMub3JnKSBhbmQgdGhlIGJyb3dzZXIuXFxuUmlsbCBicmluZ3MgY2FzY2FkaW5nIG1pZGRsZXdhcmUgdG8gdGhlIGJyb3dzZXIgYW5kIGVuYWJsZXMgZnVsbHkgdW5pdmVyc2FsIHdlYiBhcHBsaWNhdGlvbnMuXFxuSXQgbWFrZXMgYXBwcyBlbmpveWFibGUgdG8gd3JpdGUgd2l0aCBhIHNpbXBsZXIgdG9wIGRvd24gbWVudGFsIG1vZGVsIG9mIHlvdXIgYXBwIGFuZCBmcmVlIHByb2dyZXNzaXZlIGVuaGFuY2VtZW50LlxcblxcblJpbGwgcHJvdmlkZXMgdGhlIG1pbmltdW0gZm9yIGFic3RyYWN0aW9ucyBvdmVyIFtub2RlanNdKGh0dHBzOi8vbm9kZWpzLm9yZykgYW5kIHRoZSBicm93c2VyIGVuYWJsaW5nIHRoaW5ncyBsaWtlIHJvdXRpbmcgKHdpdGggcmVkaXJlY3RpbmcsIHJlZnJlc2hlcyBhbmQgbW9yZSksIGNvb2tpZXMsIGFuZCBtaWRkbGV3YXJlIHdpdGggdGhlIHNhbWUgYXBpLlxcblxcbiMgSW5zdGFsbGF0aW9uXFxuXFxuIyMjIyBOcG1cXG5gYGBjb25zb2xlXFxubnBtIGluc3RhbGwgcmlsbFxcbmBgYFxcblxcbiMjIyMgQm93ZXJcXG5gYGBjb25zb2xlXFxuYm93ZXIgaW5zdGFsbCByaWxsXFxuYGBgXFxuXFxuIyMjIyBbRG93bmxvYWRdKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9yaWxsLWpzL3JpbGwvbWFzdGVyL2Rpc3QvcmlsbC5qcylcXG5gYGBodG1sXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2phdmFzY3JpcHRcXFwiIHNyYz1cXFwicmlsbC5qc1xcXCI+PC9zY3JpcHQ+XFxuPHNjcmlwdD5cXG4gIGRlZmluZShbJ3JpbGwnXSwgZnVuY3Rpb24gKHJpbGwpIHsuLi59KSAvLyBBTURcXG4gIHdpbmRvdy5yaWxsIC8vIEdsb2JhbCByaWxsIGlmIG5vIG1vZHVsZSBzeXN0ZW0gaW4gcGxhY2UuXFxuPC9zY3JpcHQ+XFxuYGBgXFxuXFxuIyBCcm93c2VyIHN1cHBvcnRcXG5BbGwgbW9kZXJuIGJyb3dzZXJzIGFyZSBzdXBwb3J0ZWQgaW5jbHVkaW5nIElFMTArLiBJRTkgaXMgYWxzbyBzdXBwb3J0ZWQgd2l0aCBhIFtIaXN0b3J5IEFQSSBwb2x5ZmlsbF0oaHR0cHM6Ly9naXRodWIuY29tL2Rldm90ZS9IVE1MNS1IaXN0b3J5LUFQSSkuXFxuXFxuT2xkZXIgYnJvd3NlcnMgd2lsbCBhbHNvIG5lZWQgdG8gcG9seWZpbGwgdGhlIFByb21pc2UgQVBJLCBjaGVja291dCBbZXM2LXByb21pc2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9zdGVmYW5wZW5uZXIvZXM2LXByb21pc2UpIGZvciBhIGdvb2QgcG9seWZpbGwsIGJhYmVsLXBvbHlmaWxsIGFsc28gY292ZXJzIHRoaXMuXFxuXFxuIyBDb21tdW5pdHlcXG5cXG4qIFtBUEkgRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9yaWxsLnNpdGUvYXBwbGljYXRpb24jZG9jcylcXG4qIFtFeGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL3JpbGwtanMvdG9kb212YylcXG4qIFtXaWtpXShodHRwczovL2dpdGh1Yi5jb20vcmlsbC1qcy9yaWxsL3dpa2kpXFxuKiBbTWlkZGxld2FyZSBMaXN0XShodHRwczovL2dpdGh1Yi5jb20vcmlsbC1qcy9yaWxsL3dpa2kvTWlkZGxld2FyZSlcXG4qIFtHaXR0ZXIgQ29tbXVuaXR5XShodHRwczovL2dpdHRlci5pbS9yaWxsLWpzL3JpbGwpXFxuKiBbUmVkZGl0IENvbW11bml0eV0oaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9yL1JpbGwpXFxuXFxuIyBBcnRpY2xlc1xcblxcbiogW1VuaXZlcnNhbCB3ZWIgYXBwbGljYXRpb24gZnJhbWV3b3JrIC0gSW50ZXJ2aWV3IHdpdGggRHlsYW4gUGllcmNleV0oaHR0cHM6Ly9zdXJ2aXZlanMuY29tL2Jsb2cvcmlsbC1pbnRlcnZpZXcvKVxcbiogW0lzb21vcnBoaWMgSmF2YXNjcmlwdCwgbGV04oCZcyBtYWtlIGl0IGVhc2llci5dKGh0dHBzOi8vbWVkaXVtLmNvbS9AcGllcmNleWR5bGFuL2lzb21vcnBoaWMtamF2YXNjcmlwdC1pdC1qdXN0LWhhcy10by13b3JrLWI5ZGE1YjBjODAzNSlcXG4qIFtIb3cgdG8gbWFrZSB1bml2ZXJzYWwgSmF2YVNjcmlwdCBhcHBsaWNhdGlvbnPigIrigJTigIpQYXJ0IDFdKGh0dHBzOi8vbWVkaXVtLmNvbS9AcGllcmNleWR5bGFuL2hvdy10by1tYWtlLXVuaXZlcnNhbC1qYXZhc2NyaXB0LWFwcGxpY2F0aW9ucy1wYXJ0LTEtOTBlOTAzMmJjNDcxKVxcbiogW0Jyb3dzZXJzLCBTZXJ2ZXJzLCBhbmQgQVBJc10oaHR0cHM6Ly9tZWRpdW0uY29tL0BpYW1qb2huaGVucnkvYnJvd3NlcnMtc2VydmVycy1hbmQtYXBpcy0yZjdiMTA1MjNmMzkpXFxuKiBbV2h5IEV2ZXJ5b25lIGlzIFRhbGtpbmcgQWJvdXQgSXNvbW9ycGhpY10oaHR0cHM6Ly9tZWRpdW0uY29tL2NhcGl0YWwtb25lLWRldmVsb3BlcnMvd2h5LWV2ZXJ5b25lLWlzLXRhbGtpbmctYWJvdXQtaXNvbW9ycGhpYy11bml2ZXJzYWwtamF2YXNjcmlwdC1hbmQtd2h5LWl0LW1hdHRlcnMtMzhjMDdjODc5MDUjLm1kZDg0ajI4bSlcXG4qIFtJc29tb3JwaGljIEphdmFTY3JpcHQ6IFRoZSBGdXR1cmUgb2YgV2ViIEFwcHNdKGh0dHBzOi8vbWVkaXVtLmNvbS9haXJibmItZW5naW5lZXJpbmcvaXNvbW9ycGhpYy1qYXZhc2NyaXB0LXRoZS1mdXR1cmUtb2Ytd2ViLWFwcHMtMTA4ODJiN2EyZWJjKVxcblxcbiMgV2h5IFJpbGw/XFxuUmlsbCBpcyB0aGUgYW5zd2VyIHRvIGEgc2ltcGxlIHF1ZXN0aW9uOyBDYW4gSSBydW4gbXkgW0V4cHJlc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvZXhwcmVzcykgc3R5bGUgcm91dGVyIGluIHRoZSBicm93c2VyPyBUdXJucyBvdXQgeW91IGNhbiBhbmQgaXQgd29ya3MgYXdlc29tZS5cXG5cXG5JdCBicmluZ3MgYSBjb21tb24gaW50ZXJmYWNlIHRvIG1hbnkgdHlwaWNhbCBhcHAgbGlrZSBmZWF0dXJlcyBpbiBib3RoIHRoZSBicm93c2VyIGFuZCBbbm9kZWpzXShodHRwczovL25vZGVqcy5vcmcpLiBNYW55IGlzb21vcnBoaWMgZnJhbWV3b3JrcyBoYXZlIGNyYXp5IGFic3RyYWN0aW9ucyBhbmQgbGVhcm5pbmcgY3VydmVzIGJ1dCB3aXRoIFJpbGwsIGlmIHlvdSB1bmRlcnN0YW5kIFtFeHByZXNzXShodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2V4cHJlc3MpIG9yIFtLb2FdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb2Fqcy9rb2EpLCB5b3UgYWxyZWFkeSBrbm93IGhvdyB0aGUgcm91dGluZyB3b3JrcyEgSW4gUmlsbCB5b3UgZ2V0IHRvIHByb2dyYW0gbXVjaCBvZiB5b3VyIGFwcGxpY2F0aW9uIGxvZ2ljIHVzaW5nIHRoZSBzYW1lIGFwaSAoY2xpZW50IG9yIHNlcnZlcikgaW5jbHVkaW5nIHJvdXRpbmcsIHJlbmRlcmluZywgZGF0YSBmZXRjaGluZyBhbmQgbW9yZSBhcmUgZWFzaWx5IHNoYXJlZC5cXG5cXG5SaWxsIGFsc28gd29ya3MgcGVyZmVjdGx5IGFzIGEgc3RhbmQgYWxvbmUgW25vZGVqc10oaHR0cHM6Ly9ub2RlanMub3JnKSBzZXJ2ZXIgb3IgYSBzdGFuZCBhbG9uZSBicm93c2VyIGZyYW1ld29yay4gVGhpcyBhbGxvd3MgZm9yIGVhc3kgcHJvZ3Jlc3NpdmUgZW5oYW5jZW1lbnQuIElmIGFsbCBpcyB3ZWxsIHRoZSBicm93c2VyIGNhbiBoYW5kbGUgbXVjaCBvZiB5b3VyIGFwcGxpY2F0aW9uIGxvZ2ljIGFuZCBpZiBKYXZhU2NyaXB0IGZhaWxzIGZvciBhbnkgcmVhc29uIHlvdXIgc2VydmVyIGtub3dzIGV4YWN0bHkgd2hhdCB0byBkby5cXG5cXG4jIEhvdyBkb2VzIHRoaXMgdGhpbmcgd29yaz9cXG5JZiB5b3UgbG9vayBhdCB0aGUgc291cmNlIGZvciBSaWxsIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vcmlsbC1qcy9yaWxsL3RyZWUvbWFzdGVyL3NyYykgeW91IHdpbGwgcXVpY2tseSBub3RpY2UgdGhlcmUgaXMgWkVSTyBicm93c2VyIHNwZWNpZmljIGNvZGUuIFRoaXMgaXMgYWxsIHRoYW5rcyB0byBbQHJpbGwvaHR0cF0oaHR0cHM6Ly9naXRodWIuY29tL3JpbGwtanMvaHR0cCkgd2hpY2ggaXMgbm9kZSdzIFtIVFRQLmNyZWF0ZVNlcnZlcl0oaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9odHRwX2NyZWF0ZXNlcnZlcl9yZXF1ZXN0bGlzdGVuZXIpIHBvcnRlZCB0byB0aGUgYnJvd3Nlci5cXG5cXG5JbiB0aGUgYnJvd3NlciBpdCB3b3JrcyBieSBsaXN0ZW5pbmcgZm9yIGludGVybmFsIGxpbmsgY2xpY2tzLCBmb3JtIHN1Ym1pc3Npb25zIGFuZCBicm93c2VyIGhpc3RvcnkgY2hhbmdlcy4gSXQgd2lsbCB0aGVuIGNyZWF0ZSBhIFtSaWxsIENvbnRleHRdKGh0dHBzOi8vcmlsbC5zaXRlL2NvbnRleHQjZG9jcykgZm9yIGVhY2ggb2YgdGhlc2UgZXZlbnRzIGFuZCBlbWl0IGl0IHRocm91Z2ggdGhlIHJvdXRlciwgc2ltaWxhciB0byBob3cgcmVjZWl2aW5nIGEgcmVxdWVzdCB3b3JrcyBpbiBbbm9kZWpzXShodHRwczovL25vZGVqcy5vcmcpLlxcblxcbkl0IHN1cHBvcnRzIGV2ZXJ5dGhpbmcgeW91J2QgZXhwZWN0IGZyb20gYSBjbGllbnQgc2lkZSBbbm9kZWpzXShodHRwczovL25vZGVqcy5vcmcpIHNlcnZlci4gVGhpcyBpbmNsdWRlcyByZWRpcmVjdHMsIHJlZnJlc2hlcywgY29va2llcywgc2Nyb2xsaW5nIGFuZCB1cmwgdXBkYXRlcyB1c2luZyB0aGUgW0hpc3RvcnkgQVBJXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeSkuXFxuXFxuIyBFeGFtcGxlXFxuXFxuIyMjIENyZWF0ZSBhbiBhcHBcXG5cXG5gYGBqYXZhc2NyaXB0XFxuLyoqXFxuICogVGhlIGZvbGxvd2luZyBjb2RlIGNhbiBydW4gMTAwJSBpbiB0aGUgYnJvd3NlciBvciBpbiBub2RlanMuXFxuICogRXhhbXBsZXMgdXNlIGVzMjAxNS8yMDE2IHdpdGggQmFiZWwgYW5kIEpTWCBidXQgdGhpcyBpcyBvcHRpb25hbC5cXG4gKi9cXG5cXG5pbXBvcnQgcmlsbCBmcm9tICdyaWxsJ1xcbmNvbnN0IGFwcCA9IHJpbGwoKVxcbmBgYFxcblxcbiMjIyBTZXR1cCBtaWRkbGV3YXJlXFxuXFxuYGBgamF2YXNjcmlwdFxcbi8vIFVuaXZlcnNhbCBmb3JtIGRhdGEgcGFyc2luZyBtaWRkbGV3YXJlLlxcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ0ByaWxsL2JvZHknXFxuYXBwLnVzZShib2R5UGFyc2VyKCkpXFxuXFxuLy8gVW5pdmVyc2FsIHJlYWN0IHJlbmRlcmluZyBtaWRkbGV3YXJlLlxcbmltcG9ydCByZWFjdFJlbmRlcmVyIGZyb20gJ0ByaWxsL3JlYWN0J1xcbmFwcC51c2UocmVhY3RSZW5kZXJlcigpKVxcblxcbi8vIEV4YW1wbGUgTG9nZ2VyXFxuYXBwLnVzZShhc3luYyAoeyByZXEgfSwgbmV4dCk9PiB7XFxuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlXFxuXFxuICAvLyBSaWxsIHVzZXMgcHJvbWlzZXMgZm9yIGNvbnRyb2wgZmxvdy5cXG4gIC8vIEVTMjAxNiBhc3luYyBmdW5jdGlvbnMgd29yayBncmVhdCBhcyB3ZWxsIVxcbiAgYXdhaXQgbmV4dCgpXFxuXFxuICBjb25zdCBtcyA9IG5ldyBEYXRlIC0gc3RhcnRcXG4gIGNvbnNvbGUubG9nKGAke3JlcS5tZXRob2R9ICR7cmVxLnVybH0gLSAke21zfWApXFxufSlcXG5gYGBcXG5cXG4jIyMgU2V0dXAgYSBwYWdlXFxuXFxuYGBgamF2YXNjcmlwdFxcbi8vIFJlc3BvbmQgdG8gYSBHRVQgcmVxdWVzdC5cXG5hcHAuZ2V0KCcvdG9kb3MnLCBhc3luYyAoeyByZXMgfSk9PiB7XFxuICAvLyBGZXRjaCBhIHRvZG9saXN0IGZyb20gc29tZSBzZXJ2aWNlLlxcbiAgY29uc3QgdG9kb2xpc3QgPSBhd2FpdCBNeVRvZG9MaXN0U2VydmljZS5nZXRBbGxUb2RvcygpXFxuXFxuICAvLyBEaXJlY3RseSBzZXQgUmVhY3QgdmlydHVhbCBkb20gdG8gdGhlIGJvZHkgdGhhbmtzIHRvIEByaWxsL3JlYWN0LlxcbiAgLy8gKENoZWNrb3V0IEByaWxsL2h0bWwgZm9yIHVuaXZlcnNhbCBodG1sIGRpZmZpbmcpLlxcbiAgcmVzLmJvZHkgPSAoXFxuICAgIDxodG1sPlxcbiAgICAgIDxoZWFkPlxcbiAgICAgICAgPHRpdGxlPk15IEFwcDwvdGl0bGU+XFxuICAgICAgICA8bWV0YSBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCIgY29udGVudD1cXFwiUmlsbCBBcHBsaWNhdGlvblxcXCI+XFxuICAgICAgPC9oZWFkPlxcbiAgICAgIDxib2R5PlxcbiAgICAgICAgPGZvcm0gYWN0aW9uPVxcXCIvYWRkLXRvZG9cXFwiIG1ldGhvZD1cXFwiUE9TVFxcXCI+XFxuICAgICAgICAgIDxoMT5KdXN0IGEgcGxhaW4gb2xkIGZvcm08L2gxPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidG9kb1xcXCIvPlxcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+QWRkIFRvZG88L2J1dHRvbj5cXG4gICAgICAgIDwvZm9ybT5cXG5cXG4gICAgICAgIHt0b2RvbGlzdC5sZW5ndGhcXG4gICAgICAgICAgPyB0b2RvbGlzdC5tYXAocmVuZGVyVG9kbylcXG4gICAgICAgICAgOiAnTm8gdG9kb3MgdG8gZGlzcGxheS4nXFxuICAgICAgICB9XFxuICAgICAgICA8c2NyaXB0IHNyYz1cXFwiL2FwcC5qc1xcXCIvPlxcbiAgICAgIDwvYm9keT5cXG4gICAgPC9odG1sPlxcbiAgKVxcbn0pXFxuYGBgXFxuXFxuIyMjIEhhbmRsZSBhIGZvcm0gc3VibWlzc2lvblxcbmBgYGphdmFzY3JpcHRcXG4vLyBSZXNwb25kIHRvIGEgUE9TVCByZXF1ZXN0LlxcbmFwcC5wb3N0KCcvYWRkLXRvZG8nLCBhc3luYyAoeyByZXEsIHJlcyB9KT0+IHtcXG4gIC8vIFdlIGhhbmRsZSBmb3JtIHN1Ym1pc3Npb25zIHdpdGggUmlsbCB0aGUgc2FtZSB3YXkgb25lIHdvdWxkIHdpdGggYW55IG90aGVyIG5vZGUgZnJhbWV3b3JrLlxcbiAgLy8gSGVyZSB3ZSBhcmUgc2ltcGx5IGFkZGluZyB0aGUgdG9kbyB2aWEgc29tZSBzZXJ2aWNlLlxcbiAgYXdhaXQgTXlUb2RvTGlzdFNlcnZpY2UuYWRkVG9kbyh7IHRleHQ6IHJlcS5ib2R5LnRvZG8gfSlcXG4gIC8vIEFuZCB0aGVuIHdlIHJlZGlyZWN0IGJhY2sgKHNhbWUgYXMgcmVzLnJlZGlyZWN0KCcvdG9kb3MnKSlcXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXFxufSlcXG5gYGBcXG5cXG4jIyMgU3RhcnQgYXBwXFxuXFxuYGBgamF2YXNjcmlwdFxcbi8vIFN0YXJ0IGEgcmVndWxhciBodHRwIHNlcnZlci5cXG4vLyBJbiB0aGUgYnJvd3NlciBhbnkgZm9ybSBzdWJtaXNzaW9ucyBvciBsaW5rIGNsaWNrcyB3aWxsIGludGVyY2VwdGVkIGJ5IEByaWxsL2h0dHAuXFxuYXBwLmxpc3Rlbih7IHBvcnQ6IDgwIH0pXFxuYGBgXFxuXFxuIyMgU2VlIEFsc29cXG5cXG4qIFtpc2Jyb3dzZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9EeWxhblBpZXJjZXkvaXNicm93c2VyKSAtIEEgYnJvd3NlcmlmeSB0cmFuc2Zvcm0gdG8gcmVtb3ZlIHNlcnZlci1zaWRlIGNvZGUuXFxuKiBbaXNvbW9ycGhpYy1mZXRjaF0oaHR0cHM6Ly9naXRodWIuY29tL21hdHRoZXctYW5kcmV3cy9pc29tb3JwaGljLWZldGNoKSAtIFVuaXZlcnNhbCBodHRwIHJlcXVlc3RzIHVzaW5nIFdIQVRXRyBmZXRjaC5cXG4qIFtpc29tb3JwaGljLWZvcm0tZGF0YV0oaHR0cHM6Ly9naXRodWIuY29tL2Zvcm0tZGF0YS9pc29tb3JwaGljLWZvcm0tZGF0YSkgLSBTZW5kIG11bHRpcGFydCBmb3JtIGRhdGEgdW5pdmVyc2FsbHkgKGFibGUgdG8gc2VuZCBmaWxlcyBhbmQgd29ya3Mgd2l0aCBmZXRjaCkuXFxuKiBbc2Nyb2xsLWJlaGF2aW9yXShodHRwczovL2dpdGh1Yi5jb20vRHlsYW5QaWVyY2V5L3Njcm9sbC1iZWhhdmlvdXIpIC0gQHJpbGwvaHR0cCB3aWxsIGF1dG9tYXRpY2FsbHkgdHJ5IHRvIHVzZSB0aGUgXFxcInNtb290aFxcXCIgW3Njcm9sbC1iZWhhdmlvcl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3Njcm9sbC1iZWhhdmlvcikgd2hlbiBzY3JvbGxpbmcgdG8gdGFyZ2V0cyBvbiBsaW5rIGNsaWNrcy4gVGhpcyB3aWxsIHBvbHlmaWxsIHRoYXQgYWNyb3NzIG1vZGVybiBicm93c2Vycy5cXG4qIFtzdWJtaXQtZm9ybV0oaHR0cHM6Ly9naXRodWIuY29tL0R5bGFuUGllcmNleS9zdWJtaXQtZm9ybSkgLSBNYW51YWxseSB0cmlnZ2VyIFJpbGwgbmF2aWdhdGlvbiBpbiB0aGUgYnJvd3Nlci5cXG5cXG4jIyBQcmlvciBBcnRcXG5cXG4qIFtrb2EtY2xpZW50XShodHRwczovL2dpdGh1Yi5jb20va2VudGpzL2tvYS1jbGllbnQpIC0gS29hIGNsb25lIHRoYXQgcnVucyBpbiB0aGUgYnJvd3NlciwgaW5zcGlyZWQgdGhpcyBwYWNrYWdlLlxcbiogW21vbm9yb3V0ZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0aGV3d2l0aGFubS9tb25vcm91dGVyKSAtIEFub3RoZXIgaXNvbW9ycGhpYyByb3V0ZXIgdGhhdCBwYXJ0aWFsbHkgaW5zcGlyZWQgdGhpcyBwYWNrYWdlLlxcblxcbiMjIENvbnRyaWJ1dGlvbnNcXG5cXG4qIFVzZSBgbnBtIHRlc3RgIHRvIHJ1biB0ZXN0cy5cXG5cXG4jIyBMaWNlbnNlXFxuXFxuW01JVF0oaHR0cHM6Ly90bGRybGVnYWwuY29tL2xpY2Vuc2UvbWl0LWxpY2Vuc2UpXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yaWxsL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8zcHRqRzJnS19nLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9sb2dvLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL3RhZ2xpYnMvY29yZS9pbmNsdWRlLXRhZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtvL3NyYy90YWdsaWJzL2NvcmUvaW5jbHVkZS10YWdcIlxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jc3MvcGFnZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL3N0eWxlcy9vY2Vhbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvbXBpbGVkIHVzaW5nIG1hcmtvQDQuNC4yNiAtIERPIE5PVCBFRElUXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1hcmtvX3RlbXBsYXRlID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2h0bWxcIikudChfX2ZpbGVuYW1lKSxcbiAgICBtb2R1bGVfbWFya2Rvd24gPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL21hcmtkb3duXCIpLFxuICAgIG1hcmtkb3duID0gbW9kdWxlX21hcmtkb3duLmRlZmF1bHQgfHwgbW9kdWxlX21hcmtkb3duLFxuICAgIG1hcmtvX2hlbHBlcnMgPSByZXF1aXJlKFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIpLFxuICAgIG1hcmtvX3N0ciA9IG1hcmtvX2hlbHBlcnMucyxcbiAgICBtYXJrb19sb2FkVGFnID0gbWFya29faGVscGVycy50LFxuICAgIGF3YWl0X3RhZyA9IG1hcmtvX2xvYWRUYWcocmVxdWlyZShcIm1hcmtvL3NyYy90YWdsaWJzL2FzeW5jL2F3YWl0LXRhZ1wiKSksXG4gICAgYXBwX3BhZ2VfdGVtcGxhdGUgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9hcHAtcGFnZS5tYXJrb1wiKSxcbiAgICBhcHBfcGFnZV90YWcgPSBtYXJrb19sb2FkVGFnKGFwcF9wYWdlX3RlbXBsYXRlKTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBvdXQudyhcIjxkaXY+XCIpO1xuXG4gIGFwcF9wYWdlX3RhZyh7XG4gICAgICByZW5kZXJCb2R5OiBmdW5jdGlvbiByZW5kZXJCb2R5KG91dCkge1xuICAgICAgICBvdXQudyhcIjxzZWN0aW9uIGlkPVxcXCJkb2NzXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cIik7XG5cbiAgICAgICAgYXdhaXRfdGFnKHtcbiAgICAgICAgICAgIF9kYXRhUHJvdmlkZXI6IGlucHV0LnBlbmRpbmdDb250ZW50LFxuICAgICAgICAgICAgX25hbWU6IFwiaW5wdXQucGVuZGluZ0NvbnRlbnRcIixcbiAgICAgICAgICAgIHJlbmRlckJvZHk6IGZ1bmN0aW9uIHJlbmRlckJvZHkob3V0LCBjb250ZW50KSB7XG4gICAgICAgICAgICAgIG91dC53KG1hcmtvX3N0cihtYXJrZG93bihjb250ZW50KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIG91dCk7XG5cbiAgICAgICAgb3V0LncoXCI8L2Rpdj48L3NlY3Rpb24+XCIpO1xuICAgICAgfVxuICAgIH0sIG91dCk7XG5cbiAgb3V0LncoXCI8L2Rpdj5cIik7XG59XG5cbm1hcmtvX3RlbXBsYXRlLl8gPSByZW5kZXI7XG5cbm1hcmtvX3RlbXBsYXRlLm1ldGEgPSB7XG4gICAgdGFnczogW1xuICAgICAgXCJtYXJrby9zcmMvdGFnbGlicy9hc3luYy9hd2FpdC10YWdcIixcbiAgICAgIFwiLi4vY29tcG9uZW50cy9hcHAtcGFnZS5tYXJrb1wiXG4gICAgXVxuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvdmlld3MvZG9jcy5tYXJrb1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL3RhZ2xpYnMvYXN5bmMvYXdhaXQtdGFnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWFya28vc3JjL3RhZ2xpYnMvYXN5bmMvYXdhaXQtdGFnXCJcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7QUM3REE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTs7Ozs7O0FDeENBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBY0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdDQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNEQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==