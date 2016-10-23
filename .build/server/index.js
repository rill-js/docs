'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

require('raf/polyfill');

require('scroll-behaviour/polyfill');

var _rill = require('rill');

var _rill2 = _interopRequireDefault(_rill);

var _ms = require('ms');

var _ms2 = _interopRequireDefault(_ms);

var _helmet = require('@rill/helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _static = require('@rill/static');

var _static2 = _interopRequireDefault(_static);

var _logger = require('@rill/logger');

var _logger2 = _interopRequireDefault(_logger);

var _html = require('@rill/html');

var _html2 = _interopRequireDefault(_html);

var _set = require('@rill/set');

var _set2 = _interopRequireDefault(_set);

var _redirect = require('@rill/redirect');

var _redirect2 = _interopRequireDefault(_redirect);

var _loadingScreen = require('./middleware/loading-screen');

var _loadingScreen2 = _interopRequireDefault(_loadingScreen);

var _wrappers = require('./wrappers');

var _wrappers2 = _interopRequireDefault(_wrappers);

var _views = require('./views');

var _views2 = _interopRequireDefault(_views);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Startup message.
var STARTUP_MESSAGE = 'Started Server';
console.time(STARTUP_MESSAGE);

// Polyfills


// Libraries


// Middleware


// Subroutes


// Create app
exports.default = (0, _rill2.default)().use(_helmet2.default.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", 'www.google-analytics.com'],
    styleSrc: ["'self'", "'unsafe-inline'"],
    fontSrc: ["'self'"],
    imgSrc: ["'self'", 'data:', 'rill.site', 'img.shields.io', 'badge-size.herokuapp.com', 'camo.githubusercontent.com', 'www.google-analytics.com'],
    sandbox: ['allow-same-origin', 'allow-scripts']
  }
})).use(_helmet2.default.dnsPrefetchControl()).use(_helmet2.default.frameguard()).use(_helmet2.default.hidePoweredBy()).use(_helmet2.default.hpkp({
  maxAge: (0, _ms2.default)('90 days'),
  sha256s: ['AbCdEf123=', 'ZyXwVu456=']
})).use(_helmet2.default.hsts({
  maxAge: (0, _ms2.default)('90 days'),
  includeSubdomains: true
})).use(_helmet2.default.ieNoOpen()).use(_helmet2.default.noSniff()).use(_helmet2.default.xssFilter()).use((0, _static2.default)('.build/client', { gzip: true, cache: '7 days' })).use((0, _logger2.default)()).use((0, _html2.default)()).use((0, _set2.default)('title', 'Rill Framework')).use((0, _set2.default)('description', 'Universal web application framework.')).use(_loadingScreen2.default).use(_wrappers2.default).use(_views2.default).get((0, _redirect2.default)('/')).listen(function () {
  process.send && process.send('online');
  console.timeEnd(STARTUP_MESSAGE);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNUQVJUVVBfTUVTU0FHRSIsImNvbnNvbGUiLCJ0aW1lIiwidXNlIiwiY29udGVudFNlY3VyaXR5UG9saWN5IiwiZGlyZWN0aXZlcyIsImRlZmF1bHRTcmMiLCJzY3JpcHRTcmMiLCJzdHlsZVNyYyIsImZvbnRTcmMiLCJpbWdTcmMiLCJzYW5kYm94IiwiZG5zUHJlZmV0Y2hDb250cm9sIiwiZnJhbWVndWFyZCIsImhpZGVQb3dlcmVkQnkiLCJocGtwIiwibWF4QWdlIiwic2hhMjU2cyIsImhzdHMiLCJpbmNsdWRlU3ViZG9tYWlucyIsImllTm9PcGVuIiwibm9TbmlmZiIsInhzc0ZpbHRlciIsImd6aXAiLCJjYWNoZSIsImdldCIsImxpc3RlbiIsInByb2Nlc3MiLCJzZW5kIiwidGltZUVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7O0FBeEJBO0FBQ0EsSUFBTUEsa0JBQWtCLGdCQUF4QjtBQUNBQyxRQUFRQyxJQUFSLENBQWFGLGVBQWI7O0FBRUE7OztBQUtBOzs7QUFJQTs7O0FBU0E7OztBQUlBO2tCQUNlLHNCQUNaRyxHQURZLENBQ1IsaUJBQU9DLHFCQUFQLENBQTZCO0FBQ2hDQyxjQUFZO0FBQ1ZDLGdCQUFZLENBQUMsUUFBRCxDQURGO0FBRVZDLGVBQVcsQ0FBQyxRQUFELEVBQVcsaUJBQVgsRUFBOEIsMEJBQTlCLENBRkQ7QUFHVkMsY0FBVSxDQUFDLFFBQUQsRUFBVyxpQkFBWCxDQUhBO0FBSVZDLGFBQVMsQ0FBQyxRQUFELENBSkM7QUFLVkMsWUFBUSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLFdBQXBCLEVBQWlDLGdCQUFqQyxFQUFtRCwwQkFBbkQsRUFBK0UsNEJBQS9FLEVBQTZHLDBCQUE3RyxDQUxFO0FBTVZDLGFBQVMsQ0FBQyxtQkFBRCxFQUFzQixlQUF0QjtBQU5DO0FBRG9CLENBQTdCLENBRFEsRUFXWlIsR0FYWSxDQVdSLGlCQUFPUyxrQkFBUCxFQVhRLEVBWVpULEdBWlksQ0FZUixpQkFBT1UsVUFBUCxFQVpRLEVBYVpWLEdBYlksQ0FhUixpQkFBT1csYUFBUCxFQWJRLEVBY1pYLEdBZFksQ0FjUixpQkFBT1ksSUFBUCxDQUFZO0FBQ2ZDLFVBQVEsa0JBQUcsU0FBSCxDQURPO0FBRWZDLFdBQVMsQ0FBQyxZQUFELEVBQWUsWUFBZjtBQUZNLENBQVosQ0FkUSxFQWtCWmQsR0FsQlksQ0FrQlIsaUJBQU9lLElBQVAsQ0FBWTtBQUNmRixVQUFRLGtCQUFHLFNBQUgsQ0FETztBQUVmRyxxQkFBbUI7QUFGSixDQUFaLENBbEJRLEVBc0JaaEIsR0F0QlksQ0FzQlIsaUJBQU9pQixRQUFQLEVBdEJRLEVBdUJaakIsR0F2QlksQ0F1QlIsaUJBQU9rQixPQUFQLEVBdkJRLEVBd0JabEIsR0F4QlksQ0F3QlIsaUJBQU9tQixTQUFQLEVBeEJRLEVBeUJabkIsR0F6QlksQ0F5QlIsc0JBQU0sZUFBTixFQUF1QixFQUFFb0IsTUFBTSxJQUFSLEVBQWNDLE9BQU8sUUFBckIsRUFBdkIsQ0F6QlEsRUEwQlpyQixHQTFCWSxDQTBCUix1QkExQlEsRUEyQlpBLEdBM0JZLENBMkJSLHFCQTNCUSxFQTRCWkEsR0E1QlksQ0E0QlIsbUJBQUksT0FBSixFQUFhLGdCQUFiLENBNUJRLEVBNkJaQSxHQTdCWSxDQTZCUixtQkFBSSxhQUFKLEVBQW1CLHNDQUFuQixDQTdCUSxFQThCWkEsR0E5QlksMEJBK0JaQSxHQS9CWSxxQkFnQ1pBLEdBaENZLGtCQWlDWnNCLEdBakNZLENBaUNSLHdCQUFTLEdBQVQsQ0FqQ1EsRUFrQ1pDLE1BbENZLENBa0NMLFlBQU07QUFDWkMsVUFBUUMsSUFBUixJQUFnQkQsUUFBUUMsSUFBUixDQUFhLFFBQWIsQ0FBaEI7QUFDQTNCLFVBQVE0QixPQUFSLENBQWdCN0IsZUFBaEI7QUFDRCxDQXJDWSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbnBpZXJjZXkvUGxheWdyb3VuZC9yaWxsLWRvY3MifQ==
