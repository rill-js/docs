require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

require('raf/polyfill');

require('scroll-behaviour/polyfill');

var _rill = require('rill');

var _rill2 = _interopRequireDefault(_rill);

var _static = require('@rill/static');

var _static2 = _interopRequireDefault(_static);

var _logger = require('@rill/logger');

var _logger2 = _interopRequireDefault(_logger);

var _html = require('@rill/html');

var _html2 = _interopRequireDefault(_html);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

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
exports.default = (0, _rill2.default)().use((0, _static2.default)('.build/client', { gzip: true, cache: 6.048e8 })).use((0, _logger2.default)()).use((0, _html2.default)()).setup(_middleware2.default).setup(_wrappers2.default).setup(_views2.default).listen(function () {
  process.send && process.send('online');
  console.timeEnd(STARTUP_MESSAGE);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNUQVJUVVBfTUVTU0FHRSIsImNvbnNvbGUiLCJ0aW1lIiwidXNlIiwiZ3ppcCIsImNhY2hlIiwic2V0dXAiLCJsaXN0ZW4iLCJwcm9jZXNzIiwic2VuZCIsInRpbWVFbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOztBQUNBOztBQUNBOztBQUdBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFwQkE7QUFDQSxJQUFNQSxrQkFBa0IsZ0JBQXhCO0FBQ0FDLFFBQVFDLElBQVIsQ0FBYUYsZUFBYjs7QUFFQTs7O0FBS0E7OztBQUdBOzs7QUFLQTs7O0FBS0E7a0JBQ2Usc0JBQ1pHLEdBRFksQ0FDUixzQkFBTSxlQUFOLEVBQXVCLEVBQUVDLE1BQU0sSUFBUixFQUFjQyxPQUFPLE9BQXJCLEVBQXZCLENBRFEsRUFFWkYsR0FGWSxDQUVSLHVCQUZRLEVBR1pBLEdBSFksQ0FHUixxQkFIUSxFQUlaRyxLQUpZLHVCQUtaQSxLQUxZLHFCQU1aQSxLQU5ZLGtCQU9aQyxNQVBZLENBT0wsWUFBTTtBQUNaQyxVQUFRQyxJQUFSLElBQWdCRCxRQUFRQyxJQUFSLENBQWEsUUFBYixDQUFoQjtBQUNBUixVQUFRUyxPQUFSLENBQWdCVixlQUFoQjtBQUNELENBVlkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2R5bGFucGllcmNleS9QbGF5Z3JvdW5kL3JpbGwtZG9jcyJ9
