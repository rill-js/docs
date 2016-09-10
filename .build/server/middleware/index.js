require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadingScreen = require('./loading-screen');

var _loadingScreen2 = _interopRequireDefault(_loadingScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (router) {
  // Only use loading screen in the browser.
  if (process.browser) router.use(_loadingScreen2.default);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImJyb3dzZXIiLCJyb3V0ZXIiLCJ1c2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWUsa0JBQVU7QUFDdkI7QUFDQSxNQUFJQSxRQUFRQyxPQUFaLEVBQXFCQyxPQUFPQyxHQUFQO0FBQ3RCIiwiZmlsZSI6Im1pZGRsZXdhcmUvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2R5bGFucGllcmNleS9QbGF5Z3JvdW5kL3JpbGwtZG9jcyJ9
