'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL21hcmtkb3duLmpzIl0sIm5hbWVzIjpbIm1hcmtkb3duIiwicmVnaXN0ZXJMYW5ndWFnZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJjb2RlIiwibGFuZyIsInRvTG93ZXJDYXNlIiwiaGlnaGxpZ2h0IiwidmFsdWUiLCJzZXRPcHRpb25zIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBMEJ3QkEsUTs7QUExQnhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0Esb0JBQUtDLGdCQUFMLENBQXNCLE1BQXRCO0FBQ0Esb0JBQUtBLGdCQUFMLENBQXNCLFNBQXRCO0FBQ0Esb0JBQUtBLGdCQUFMLENBQXNCLE1BQXRCO0FBQ0Esb0JBQUtBLGdCQUFMLENBQXNCLEtBQXRCO0FBQ0Esb0JBQUtBLGdCQUFMLENBQXNCLElBQXRCO0FBQ0Esb0JBQUtBLGdCQUFMLENBQXNCLFlBQXRCOztBQUVBO0FBQ0EsSUFBTUMsV0FBVyxJQUFJLGlCQUFPQyxRQUFYLEVBQWpCO0FBQ0FELFNBQVNFLElBQVQsR0FBZ0IsVUFBQ0EsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQzlCQSxTQUFPQSxLQUFLQyxXQUFMLEVBQVA7QUFDQUYsU0FBTyxvQkFBS0csU0FBTCxDQUFlRixJQUFmLEVBQXFCRCxJQUFyQixFQUEyQixJQUEzQixFQUFpQ0ksS0FBeEM7QUFDQSxxQ0FBaUNILElBQWpDLFVBQTBDRCxJQUExQztBQUNELENBSkQ7QUFLQSxpQkFBT0ssVUFBUCxDQUFrQixFQUFFUCxrQkFBRixFQUFsQjs7QUFFQTs7O0FBR2UsU0FBU0YsUUFBVCxDQUFtQlUsSUFBbkIsRUFBeUI7QUFDdEMsU0FBTyxzQkFBT0EsSUFBUCxDQUFQO0FBQ0QiLCJmaWxlIjoidXRpbHMvbWFya2Rvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2R5bGFuL0RldmVsb3BtZW50L2Z1bi9yaWxsLWRvY3MifQ==
