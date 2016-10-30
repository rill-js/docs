'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

require('raf/polyfill');

require('scroll-behaviour/polyfill');

var _rill = require('rill');

var _rill2 = _interopRequireDefault(_rill);

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
exports.default = (0, _rill2.default)().use((0, _helmet2.default)(global.SECURITY)).use((0, _static2.default)('.build/client', { gzip: true, cache: '7 days' })).use((0, _logger2.default)()).use((0, _html2.default)()).use((0, _set2.default)('title', 'Rill Framework')).use((0, _set2.default)('description', 'Universal web application framework.')).use(_loadingScreen2.default).use(_wrappers2.default).use(_views2.default).get((0, _redirect2.default)('/')).listen(function () {
  process.send && process.send('online');
  console.timeEnd(STARTUP_MESSAGE);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNUQVJUVVBfTUVTU0FHRSIsImNvbnNvbGUiLCJ0aW1lIiwidXNlIiwiZ2xvYmFsIiwiU0VDVVJJVFkiLCJnemlwIiwiY2FjaGUiLCJnZXQiLCJsaXN0ZW4iLCJwcm9jZXNzIiwic2VuZCIsInRpbWVFbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOztBQUNBOztBQUNBOztBQUdBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7QUF2QkE7QUFDQSxJQUFNQSxrQkFBa0IsZ0JBQXhCO0FBQ0FDLFFBQVFDLElBQVIsQ0FBYUYsZUFBYjs7QUFFQTs7O0FBS0E7OztBQUdBOzs7QUFTQTs7O0FBSUE7a0JBQ2Usc0JBQ1pHLEdBRFksQ0FDUixzQkFBT0MsT0FBT0MsUUFBZCxDQURRLEVBRVpGLEdBRlksQ0FFUixzQkFBTSxlQUFOLEVBQXVCLEVBQUVHLE1BQU0sSUFBUixFQUFjQyxPQUFPLFFBQXJCLEVBQXZCLENBRlEsRUFHWkosR0FIWSxDQUdSLHVCQUhRLEVBSVpBLEdBSlksQ0FJUixxQkFKUSxFQUtaQSxHQUxZLENBS1IsbUJBQUksT0FBSixFQUFhLGdCQUFiLENBTFEsRUFNWkEsR0FOWSxDQU1SLG1CQUFJLGFBQUosRUFBbUIsc0NBQW5CLENBTlEsRUFPWkEsR0FQWSwwQkFRWkEsR0FSWSxxQkFTWkEsR0FUWSxrQkFVWkssR0FWWSxDQVVSLHdCQUFTLEdBQVQsQ0FWUSxFQVdaQyxNQVhZLENBV0wsWUFBTTtBQUNaQyxVQUFRQyxJQUFSLElBQWdCRCxRQUFRQyxJQUFSLENBQWEsUUFBYixDQUFoQjtBQUNBVixVQUFRVyxPQUFSLENBQWdCWixlQUFoQjtBQUNELENBZFksQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHlsYW5waWVyY2V5L1BsYXlncm91bmQvcmlsbC1kb2NzIn0=
