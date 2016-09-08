require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markdown = undefined;

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

_highlight2.default.registerLanguage('bash', _bash2.default);
_highlight2.default.registerLanguage('console', _bash2.default);
_highlight2.default.registerLanguage('html', _xml2.default);
_highlight2.default.registerLanguage('js', _javascript2.default);
_highlight2.default.registerLanguage('javascript', _javascript2.default);

var renderer = new _marked2.default.Renderer();
renderer.code = function (code, lang) {
  lang = lang.toLowerCase();
  code = _highlight2.default.highlight(lang, code, true).value;
  return '<pre><code class="hljs ' + lang + '">' + code + '</code></pre>';
};
_marked2.default.setOptions({ renderer: renderer });

var markdown = exports.markdown = function markdown(text) {
  return (0, _marked2.default)(text);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJMYW5ndWFnZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJjb2RlIiwibGFuZyIsInRvTG93ZXJDYXNlIiwiaGlnaGxpZ2h0IiwidmFsdWUiLCJzZXRPcHRpb25zIiwibWFya2Rvd24iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsb0JBQUtBLGdCQUFMLENBQXNCLE1BQXRCO0FBQ0Esb0JBQUtBLGdCQUFMLENBQXNCLFNBQXRCO0FBQ0Esb0JBQUtBLGdCQUFMLENBQXNCLE1BQXRCO0FBQ0Esb0JBQUtBLGdCQUFMLENBQXNCLElBQXRCO0FBQ0Esb0JBQUtBLGdCQUFMLENBQXNCLFlBQXRCOztBQUVBLElBQU1DLFdBQVcsSUFBSSxpQkFBT0MsUUFBWCxFQUFqQjtBQUNBRCxTQUFTRSxJQUFULEdBQWdCLFVBQUNBLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM5QkEsU0FBT0EsS0FBS0MsV0FBTCxFQUFQO0FBQ0FGLFNBQU8sb0JBQUtHLFNBQUwsQ0FBZUYsSUFBZixFQUFxQkQsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUNJLEtBQXhDO0FBQ0EscUNBQWlDSCxJQUFqQyxVQUEwQ0QsSUFBMUM7QUFDRCxDQUpEO0FBS0EsaUJBQU9LLFVBQVAsQ0FBa0IsRUFBRVAsa0JBQUYsRUFBbEI7O0FBRU8sSUFBTVEsOEJBQVcsU0FBWEEsUUFBVztBQUFBLFNBQVEsc0JBQU9DLElBQVAsQ0FBUjtBQUFBLENBQWpCIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2R5bGFucGllcmNleS9QbGF5Z3JvdW5kL3JpbGwtZG9jcy1odG1sIn0=
