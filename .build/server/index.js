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
    imgSrc: ["'self'", 'data:', 'rill.site', 'img.shields.io', 'badge-size.herokuapp.com', 'camo.githubusercontent.com', 'www.google-analytics.com', 'stats.g.doubleclick.net'],
    sandbox: ['allow-same-origin', 'allow-scripts']
  }
})).use(_helmet2.default.dnsPrefetchControl()).use(_helmet2.default.frameguard()).use(_helmet2.default.hidePoweredBy()).use(_helmet2.default.hpkp({
  maxAge: (0, _ms2.default)('90 days'),
  sha256s: ['AbCdEf123=', 'ZyXwVu456=']
})).use(_helmet2.default.hsts({
  maxAge: (0, _ms2.default)('90 days'),
  includeSubdomains: true,
  force: true
})).use(_helmet2.default.ieNoOpen()).use(_helmet2.default.noSniff()).use(_helmet2.default.xssFilter()).use((0, _static2.default)('.build/client', { gzip: true, cache: '7 days' })).use((0, _logger2.default)()).use((0, _html2.default)()).use((0, _set2.default)('title', 'Rill Framework')).use((0, _set2.default)('description', 'Universal web application framework.')).use(_loadingScreen2.default).use(_wrappers2.default).use(_views2.default).get((0, _redirect2.default)('/')).listen(function () {
  process.send && process.send('online');
  console.timeEnd(STARTUP_MESSAGE);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNUQVJUVVBfTUVTU0FHRSIsImNvbnNvbGUiLCJ0aW1lIiwidXNlIiwiY29udGVudFNlY3VyaXR5UG9saWN5IiwiZGlyZWN0aXZlcyIsImRlZmF1bHRTcmMiLCJzY3JpcHRTcmMiLCJzdHlsZVNyYyIsImZvbnRTcmMiLCJpbWdTcmMiLCJzYW5kYm94IiwiZG5zUHJlZmV0Y2hDb250cm9sIiwiZnJhbWVndWFyZCIsImhpZGVQb3dlcmVkQnkiLCJocGtwIiwibWF4QWdlIiwic2hhMjU2cyIsImhzdHMiLCJpbmNsdWRlU3ViZG9tYWlucyIsImZvcmNlIiwiaWVOb09wZW4iLCJub1NuaWZmIiwieHNzRmlsdGVyIiwiZ3ppcCIsImNhY2hlIiwiZ2V0IiwibGlzdGVuIiwicHJvY2VzcyIsInNlbmQiLCJ0aW1lRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7QUF4QkE7QUFDQSxJQUFNQSxrQkFBa0IsZ0JBQXhCO0FBQ0FDLFFBQVFDLElBQVIsQ0FBYUYsZUFBYjs7QUFFQTs7O0FBS0E7OztBQUlBOzs7QUFTQTs7O0FBSUE7a0JBQ2Usc0JBQ1pHLEdBRFksQ0FDUixpQkFBT0MscUJBQVAsQ0FBNkI7QUFDaENDLGNBQVk7QUFDVkMsZ0JBQVksQ0FBQyxRQUFELENBREY7QUFFVkMsZUFBVyxDQUFDLFFBQUQsRUFBVyxpQkFBWCxFQUE4QiwwQkFBOUIsQ0FGRDtBQUdWQyxjQUFVLENBQUMsUUFBRCxFQUFXLGlCQUFYLENBSEE7QUFJVkMsYUFBUyxDQUFDLFFBQUQsQ0FKQztBQUtWQyxZQUFRLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsV0FBcEIsRUFBaUMsZ0JBQWpDLEVBQW1ELDBCQUFuRCxFQUErRSw0QkFBL0UsRUFBNkcsMEJBQTdHLEVBQXlJLHlCQUF6SSxDQUxFO0FBTVZDLGFBQVMsQ0FBQyxtQkFBRCxFQUFzQixlQUF0QjtBQU5DO0FBRG9CLENBQTdCLENBRFEsRUFXWlIsR0FYWSxDQVdSLGlCQUFPUyxrQkFBUCxFQVhRLEVBWVpULEdBWlksQ0FZUixpQkFBT1UsVUFBUCxFQVpRLEVBYVpWLEdBYlksQ0FhUixpQkFBT1csYUFBUCxFQWJRLEVBY1pYLEdBZFksQ0FjUixpQkFBT1ksSUFBUCxDQUFZO0FBQ2ZDLFVBQVEsa0JBQUcsU0FBSCxDQURPO0FBRWZDLFdBQVMsQ0FBQyxZQUFELEVBQWUsWUFBZjtBQUZNLENBQVosQ0FkUSxFQWtCWmQsR0FsQlksQ0FrQlIsaUJBQU9lLElBQVAsQ0FBWTtBQUNmRixVQUFRLGtCQUFHLFNBQUgsQ0FETztBQUVmRyxxQkFBbUIsSUFGSjtBQUdmQyxTQUFPO0FBSFEsQ0FBWixDQWxCUSxFQXVCWmpCLEdBdkJZLENBdUJSLGlCQUFPa0IsUUFBUCxFQXZCUSxFQXdCWmxCLEdBeEJZLENBd0JSLGlCQUFPbUIsT0FBUCxFQXhCUSxFQXlCWm5CLEdBekJZLENBeUJSLGlCQUFPb0IsU0FBUCxFQXpCUSxFQTBCWnBCLEdBMUJZLENBMEJSLHNCQUFNLGVBQU4sRUFBdUIsRUFBRXFCLE1BQU0sSUFBUixFQUFjQyxPQUFPLFFBQXJCLEVBQXZCLENBMUJRLEVBMkJadEIsR0EzQlksQ0EyQlIsdUJBM0JRLEVBNEJaQSxHQTVCWSxDQTRCUixxQkE1QlEsRUE2QlpBLEdBN0JZLENBNkJSLG1CQUFJLE9BQUosRUFBYSxnQkFBYixDQTdCUSxFQThCWkEsR0E5QlksQ0E4QlIsbUJBQUksYUFBSixFQUFtQixzQ0FBbkIsQ0E5QlEsRUErQlpBLEdBL0JZLDBCQWdDWkEsR0FoQ1kscUJBaUNaQSxHQWpDWSxrQkFrQ1p1QixHQWxDWSxDQWtDUix3QkFBUyxHQUFULENBbENRLEVBbUNaQyxNQW5DWSxDQW1DTCxZQUFNO0FBQ1pDLFVBQVFDLElBQVIsSUFBZ0JELFFBQVFDLElBQVIsQ0FBYSxRQUFiLENBQWhCO0FBQ0E1QixVQUFRNkIsT0FBUixDQUFnQjlCLGVBQWhCO0FBQ0QsQ0F0Q1ksQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHlsYW5waWVyY2V5L1BsYXlncm91bmQvcmlsbC1kb2NzIn0=
