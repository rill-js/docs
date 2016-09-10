require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = markdown;

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _highlight = require('highlight.js/lib/highlight');

var _highlight2 = _interopRequireDefault(_highlight);

var _bash = require('highlight.js/lib/languages/bash');

var _bash2 = _interopRequireDefault(_bash);

var _xml = require('highlight.js/lib/languages/xml');

var _xml2 = _interopRequireDefault(_xml);

var _javascript = require('highlight.js/lib/languages/javascript');

var _javascript2 = _interopRequireDefault(_javascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setup highlight.js languages.
_highlight2.default.registerLanguage('bash', _bash2.default);
_highlight2.default.registerLanguage('console', _bash2.default);
_highlight2.default.registerLanguage('html', _xml2.default);
_highlight2.default.registerLanguage('xml', _xml2.default);
_highlight2.default.registerLanguage('js', _javascript2.default);
_highlight2.default.registerLanguage('javascript', _javascript2.default);

// Setup custom renderer for marked which uses highlight.js for syntax highlighting.
var renderer = new _marked2.default.Renderer();
renderer.code = function (code, lang) {
  lang = lang.toLowerCase();
  code = _highlight2.default.highlight(lang, code, true).value;
  return '<pre><code class="hljs ' + lang + '">' + code + '</code></pre>';
};
_marked2.default.setOptions({ renderer: renderer });

/**
 * Parses text as markdown using marked.js and the custom renderer above.
 */
function markdown(text) {
  return (0, _marked2.default)(text);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL21hcmtkb3duLmpzIl0sIm5hbWVzIjpbIm1hcmtkb3duIiwicmVnaXN0ZXJMYW5ndWFnZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJjb2RlIiwibGFuZyIsInRvTG93ZXJDYXNlIiwiaGlnaGxpZ2h0IiwidmFsdWUiLCJzZXRPcHRpb25zIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBMEJ3QkE7O0FBMUJ4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLG9CQUFLQyxnQkFBTCxDQUFzQixNQUF0QjtBQUNBLG9CQUFLQSxnQkFBTCxDQUFzQixTQUF0QjtBQUNBLG9CQUFLQSxnQkFBTCxDQUFzQixNQUF0QjtBQUNBLG9CQUFLQSxnQkFBTCxDQUFzQixLQUF0QjtBQUNBLG9CQUFLQSxnQkFBTCxDQUFzQixJQUF0QjtBQUNBLG9CQUFLQSxnQkFBTCxDQUFzQixZQUF0Qjs7QUFFQTtBQUNBLElBQU1DLFdBQVcsSUFBSSxpQkFBT0MsUUFBWCxFQUFqQjtBQUNBRCxTQUFTRSxJQUFULEdBQWdCLFVBQUNBLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM5QkEsU0FBT0EsS0FBS0MsV0FBTCxFQUFQO0FBQ0FGLFNBQU8sb0JBQUtHLFNBQUwsQ0FBZUYsSUFBZixFQUFxQkQsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUNJLEtBQXhDO0FBQ0EscUNBQWlDSCxJQUFqQyxVQUEwQ0QsSUFBMUM7QUFDRCxDQUpEO0FBS0EsaUJBQU9LLFVBQVAsQ0FBa0IsRUFBRVAsa0JBQUYsRUFBbEI7O0FBRUE7OztBQUdlLFNBQVNGLFFBQVQsQ0FBbUJVLElBQW5CLEVBQXlCO0FBQ3RDLFNBQU8sc0JBQU9BLElBQVAsQ0FBUDtBQUNEIiwiZmlsZSI6InV0aWxzL21hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbnBpZXJjZXkvUGxheWdyb3VuZC9yaWxsLWRvY3MifQ==
