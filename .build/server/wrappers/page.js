'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['<!DOCTYPE html><html><head><meta char-set="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/><meta name="description" content="', '"/><title>', '</title><meta property="og:title" content="', '"/><meta property="og:url" content="', '"/><meta property="og:image" content="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Logo.jpg"/><link rel="shortcut icon" href="/favicon.png"/><link rel="stylesheet" href="/index.css?v=', '"/></head><body><a href="https://github.com/rill-js/rill"><img style="position:absolute;top:0;left:0;border:0;" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"></a><section id="top"><div id="menu"><a href="#top" id="toggle">&#9776;</a><ul><li><b>Documentation</b><hr/></li><li><a href="/application#docs">Application</a></li><li><a href="/context#docs">Context</a></li><li><a href="/request#docs">Request</a></li><li><a href="/response#docs">Response</a></li><li><br/><b>Community</b><hr/></li><li><a href="/#community">Links</a></li><li><a href="/#articles">Articles</a></li></ul></div><div id="heading"><div id="logo"><a href="/#docs"><img src="/logo.svg"/></a></div></div></section><div data-key="', '">!', '</div><div id="loading-screen"><div class="loader"></div></div><style>', '</style><script src="/index.js?v=', '"></script><script>!function(a,p,i,d,o,c,s){a.GoogleAnalyticsObject=i;a[i]||(a[i]=function(){ (a[i].q=a[i].q||[]).push(arguments)});a[i].l=+new Date;c=p.createElement(d); s=p.getElementsByTagName(d)[0];c.src=o;s.parentNode.insertBefore(c,s)} (window,document,\'ga\',\'script\',\'//www.google-analytics.com/analytics.js\'); ga(\'create\', \'UA-53202133-2\', \'auto\'); ga(\'send\', \'pageview\');</script></body></html>'], ['<!DOCTYPE html><html><head><meta char-set="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/><meta name="description" content="', '"/><title>', '</title><meta property="og:title" content="', '"/><meta property="og:url" content="', '"/><meta property="og:image" content="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Logo.jpg"/><link rel="shortcut icon" href="/favicon.png"/><link rel="stylesheet" href="/index.css?v=', '"/></head><body><a href="https://github.com/rill-js/rill"><img style="position:absolute;top:0;left:0;border:0;" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"></a><section id="top"><div id="menu"><a href="#top" id="toggle">&#9776;</a><ul><li><b>Documentation</b><hr/></li><li><a href="/application#docs">Application</a></li><li><a href="/context#docs">Context</a></li><li><a href="/request#docs">Request</a></li><li><a href="/response#docs">Response</a></li><li><br/><b>Community</b><hr/></li><li><a href="/#community">Links</a></li><li><a href="/#articles">Articles</a></li></ul></div><div id="heading"><div id="logo"><a href="/#docs"><img src="/logo.svg"/></a></div></div></section><div data-key="', '">!', '</div><div id="loading-screen"><div class="loader"></div></div><style>', '</style><script src="/index.js?v=', '"></script><script>!function(a,p,i,d,o,c,s){a.GoogleAnalyticsObject=i;a[i]||(a[i]=function(){ (a[i].q=a[i].q||[]).push(arguments)});a[i].l=+new Date;c=p.createElement(d); s=p.getElementsByTagName(d)[0];c.src=o;s.parentNode.insertBefore(c,s)} (window,document,\'ga\',\'script\',\'//www.google-analytics.com/analytics.js\'); ga(\'create\', \'UA-53202133-2\', \'auto\'); ga(\'send\', \'pageview\');</script></body></html>']);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _asHtml = require('as-html');

var _asHtml2 = _interopRequireDefault(_asHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var VERSION = '1';
var THEME = '/* Ocean Dark Theme */\n/* https://github.com/gavsiu */\n/* Original theme - https://github.com/chriskempson/base16 */\n\n/* Ocean Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #65737e;\n}\n\n/* Ocean Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #bf616a;\n}\n\n/* Ocean Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #d08770;\n}\n\n/* Ocean Yellow */\n.hljs-attribute {\n  color: #ebcb8b;\n}\n\n/* Ocean Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #a3be8c;\n}\n\n/* Ocean Blue */\n.hljs-title,\n.hljs-section {\n  color: #8fa1b3;\n}\n\n/* Ocean Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #b48ead;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #2b303b;\n  color: #c0c5ce;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n';

/**
 * This wrapper is a middleware which will run on every page, wrapping it in some html.
 * Larger apps will typically have multiple wrappers for sections of the site, such as a dashboard.
 */

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2, next) {
    var req = _ref2.req,
        res = _ref2.res,
        locals = _ref2.locals;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next();

          case 2:
            if (!(typeof res.body !== 'string')) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return');

          case 4:

            res.body = (0, _asHtml2.default)(_templateObject, locals.description, locals.title, locals.title, req.href, VERSION, req.pathname, res.body, THEME, VERSION);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function pageWrapper(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return pageWrapper;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBwZXJzL3BhZ2UuanMiXSwibmFtZXMiOlsiVkVSU0lPTiIsIlRIRU1FIiwibmV4dCIsInJlcSIsInJlcyIsImxvY2FscyIsImJvZHkiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwiaHJlZiIsInBhdGhuYW1lIiwicGFnZVdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUNBLElBQU1BLGFBQU47QUFDQSxJQUFNQyxna0NBQU47O0FBRUE7Ozs7Ozt1REFJZSx3QkFBa0RDLElBQWxEO0FBQUEsUUFBOEJDLEdBQTlCLFNBQThCQSxHQUE5QjtBQUFBLFFBQW1DQyxHQUFuQyxTQUFtQ0EsR0FBbkM7QUFBQSxRQUF3Q0MsTUFBeEMsU0FBd0NBLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNQSCxNQURPOztBQUFBO0FBQUEsa0JBRVQsT0FBT0UsSUFBSUUsSUFBWCxLQUFvQixRQUZYO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUliRixnQkFBSUUsSUFBSiwwQ0FPMENELE9BQU9FLFdBUGpELEVBUWVGLE9BQU9HLEtBUnRCLEVBUzJDSCxPQUFPRyxLQVRsRCxFQVV5Q0wsSUFBSU0sSUFWN0MsRUFha0RULE9BYmxELEVBc0R1QkcsSUFBSU8sUUF0RDNCLEVBc0R5Q04sSUFBSUUsSUF0RDdDLEVBMERlTCxLQTFEZixFQTJEaUNELE9BM0RqQzs7QUFKYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlVyxXOzs7O1NBQUFBLFciLCJmaWxlIjoid3JhcHBlcnMvcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHlsYW4vRGV2ZWxvcG1lbnQvZnVuL3JpbGwtZG9jcyJ9
