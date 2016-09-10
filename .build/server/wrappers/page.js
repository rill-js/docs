require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta char-set="UTF-8"/>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>\n            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>\n            <meta name="description" content="', '"/>\n            <title>', '</title>\n            <link rel="shortcut icon" href="/favicon.png"/>\n            <link rel="stylesheet" href="/index.css"/>\n          </head>\n          <body>\n            <a href="https://github.com/rill-js/rill"><img style="position: fixed; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"></a>\n\n            <section id="top">\n              <div id="menu">\n                <a href="#top" id="toggle">&#9776;</a>\n                <ul>\n                  <li><b>Documentation</b><hr/></li>\n                  <li>\n                    <a href="/application#docs">Application</a>\n                  </li>\n                  <li>\n                    <a href="/context#docs">Context</a>\n                  </li>\n                  <li>\n                    <a href="/request#docs">Request</a>\n                  </li>\n                  <li>\n                    <a href="/response#docs">Response</a>\n                  </li>\n                  <li><br/><b>Community</b><hr/></li>\n                  <li>\n                    <a href="/#community">Links</a>\n                  </li>\n                  <li>\n                    <a href="/#articles">Articles</a>\n                  </li>\n                </ul>\n              </div>\n\n              <div id="heading">\n                <div id="logo">\n                  <a href="/#docs">\n                    <img src="/logo.svg"/>\n                  </a>\n                </div>\n              </div>\n            </section>\n\n            <div data-key="', '">!', '</div>\n\n            <div id="loading-screen"><div class="loader"></div></div>\n\n            <style>', '</style>\n            <script src="/index.js"></script>\n          </body>\n        </html>\n      '], ['\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta char-set="UTF-8"/>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>\n            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>\n            <meta name="description" content="', '"/>\n            <title>', '</title>\n            <link rel="shortcut icon" href="/favicon.png"/>\n            <link rel="stylesheet" href="/index.css"/>\n          </head>\n          <body>\n            <a href="https://github.com/rill-js/rill"><img style="position: fixed; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"></a>\n\n            <section id="top">\n              <div id="menu">\n                <a href="#top" id="toggle">&#9776;</a>\n                <ul>\n                  <li><b>Documentation</b><hr/></li>\n                  <li>\n                    <a href="/application#docs">Application</a>\n                  </li>\n                  <li>\n                    <a href="/context#docs">Context</a>\n                  </li>\n                  <li>\n                    <a href="/request#docs">Request</a>\n                  </li>\n                  <li>\n                    <a href="/response#docs">Response</a>\n                  </li>\n                  <li><br/><b>Community</b><hr/></li>\n                  <li>\n                    <a href="/#community">Links</a>\n                  </li>\n                  <li>\n                    <a href="/#articles">Articles</a>\n                  </li>\n                </ul>\n              </div>\n\n              <div id="heading">\n                <div id="logo">\n                  <a href="/#docs">\n                    <img src="/logo.svg"/>\n                  </a>\n                </div>\n              </div>\n            </section>\n\n            <div data-key="', '">!', '</div>\n\n            <div id="loading-screen"><div class="loader"></div></div>\n\n            <style>', '</style>\n            <script src="/index.js"></script>\n          </body>\n        </html>\n      ']);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _asHtml = require('as-html');

var _asHtml2 = _interopRequireDefault(_asHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var theme = '/* Ocean Dark Theme */\n/* https://github.com/gavsiu */\n/* Original theme - https://github.com/chriskempson/base16 */\n\n/* Ocean Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #65737e;\n}\n\n/* Ocean Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #bf616a;\n}\n\n/* Ocean Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #d08770;\n}\n\n/* Ocean Yellow */\n.hljs-attribute {\n  color: #ebcb8b;\n}\n\n/* Ocean Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #a3be8c;\n}\n\n/* Ocean Blue */\n.hljs-title,\n.hljs-section {\n  color: #8fa1b3;\n}\n\n/* Ocean Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #b48ead;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: #2b303b;\n  color: #c0c5ce;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n';

/**
 * This wrapper is a middleware which will run on every page, wrapping it in some html.
 * Larger apps will typically have multiple wrappers for sections of the site, such as a dashboard.
 */

exports.default = function (app) {
  app.get('/*', function (_ref, next) {
    var req = _ref.req;
    var res = _ref.res;
    var locals = _ref.locals;

    return next().then(function () {
      if (typeof res.body !== 'string') return;

      res.body = (0, _asHtml2.default)(_templateObject, locals.description, locals.title, req.pathname, res.body, theme);
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBwZXJzL3BhZ2UuanMiXSwibmFtZXMiOlsidGhlbWUiLCJhcHAiLCJnZXQiLCJuZXh0IiwicmVxIiwicmVzIiwibG9jYWxzIiwidGhlbiIsImJvZHkiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNQSxna0NBQU47O0FBRUE7Ozs7O2tCQUllLFVBQUNDLEdBQUQsRUFBUztBQUN0QkEsTUFBSUMsR0FBSixDQUFRLElBQVIsRUFBYyxnQkFBdUJDLElBQXZCLEVBQWdDO0FBQUEsUUFBN0JDLEdBQTZCLFFBQTdCQSxHQUE2QjtBQUFBLFFBQXhCQyxHQUF3QixRQUF4QkEsR0FBd0I7QUFBQSxRQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1COztBQUM1QyxXQUFPSCxPQUFPSSxJQUFQLENBQVksWUFBTTtBQUN2QixVQUFJLE9BQU9GLElBQUlHLElBQVgsS0FBb0IsUUFBeEIsRUFBa0M7O0FBRWxDSCxVQUFJRyxJQUFKLDBDQU8wQ0YsT0FBT0csV0FQakQsRUFRZUgsT0FBT0ksS0FSdEIsRUFtRHVCTixJQUFJTyxRQW5EM0IsRUFtRHlDTixJQUFJRyxJQW5EN0MsRUF1RGVSLEtBdkRmO0FBNERELEtBL0RNLENBQVA7QUFnRUQsR0FqRUQ7QUFrRUQiLCJmaWxlIjoid3JhcHBlcnMvcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHlsYW5waWVyY2V5L1BsYXlncm91bmQvcmlsbC1kb2NzIn0=
