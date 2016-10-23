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
exports.default = (0, _rill2.default)().use((0, _helmet2.default)()).use((0, _static2.default)('.build/client', { gzip: true, cache: '7 days' })).use((0, _logger2.default)()).use((0, _html2.default)()).use((0, _set2.default)('title', 'Rill Framework')).use((0, _set2.default)('description', 'Universal web application framework.')).use(_loadingScreen2.default).use(_wrappers2.default).use(_views2.default).get((0, _redirect2.default)('/')).listen(function () {
  process.send && process.send('online');
  console.timeEnd(STARTUP_MESSAGE);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNUQVJUVVBfTUVTU0FHRSIsImNvbnNvbGUiLCJ0aW1lIiwidXNlIiwiZ3ppcCIsImNhY2hlIiwiZ2V0IiwibGlzdGVuIiwicHJvY2VzcyIsInNlbmQiLCJ0aW1lRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7O0FBdkJBO0FBQ0EsSUFBTUEsa0JBQWtCLGdCQUF4QjtBQUNBQyxRQUFRQyxJQUFSLENBQWFGLGVBQWI7O0FBRUE7OztBQUtBOzs7QUFHQTs7O0FBU0E7OztBQUlBO2tCQUNlLHNCQUNaRyxHQURZLENBQ1IsdUJBRFEsRUFFWkEsR0FGWSxDQUVSLHNCQUFNLGVBQU4sRUFBdUIsRUFBRUMsTUFBTSxJQUFSLEVBQWNDLE9BQU8sUUFBckIsRUFBdkIsQ0FGUSxFQUdaRixHQUhZLENBR1IsdUJBSFEsRUFJWkEsR0FKWSxDQUlSLHFCQUpRLEVBS1pBLEdBTFksQ0FLUixtQkFBSSxPQUFKLEVBQWEsZ0JBQWIsQ0FMUSxFQU1aQSxHQU5ZLENBTVIsbUJBQUksYUFBSixFQUFtQixzQ0FBbkIsQ0FOUSxFQU9aQSxHQVBZLDBCQVFaQSxHQVJZLHFCQVNaQSxHQVRZLGtCQVVaRyxHQVZZLENBVVIsd0JBQVMsR0FBVCxDQVZRLEVBV1pDLE1BWFksQ0FXTCxZQUFNO0FBQ1pDLFVBQVFDLElBQVIsSUFBZ0JELFFBQVFDLElBQVIsQ0FBYSxRQUFiLENBQWhCO0FBQ0FSLFVBQVFTLE9BQVIsQ0FBZ0JWLGVBQWhCO0FBQ0QsQ0FkWSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbnBpZXJjZXkvUGxheWdyb3VuZC9yaWxsLWRvY3MifQ==
