'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadingScreen;

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Creates a Promise that will wait for `ms`.
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var started = false;

// This middleware will bring up the loading screen when needed in the browser.
function loadingScreen(_ref, next) {
  var req = _ref.req;

  if (!process.browser || !started) {
    started = true;
    return next();
  }

  // Check if we have naviagted to a completely different page.
  // We use this to display the loading animation.
  // There are probably 100 better ways to do this.
  var referrer = req.get('Referrer');
  if (referrer) {
    var _url$parse = _url2.default.parse(referrer);

    var pathname = _url$parse.pathname;

    if (pathname !== req.pathname) {
      document.getElementById('loading-screen').setAttribute('class', 'loading');
      return next().then(sleep.bind(null, 500));
    }
  }

  return next();
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvbG9hZGluZy1zY3JlZW4uanMiXSwibmFtZXMiOlsibG9hZGluZ1NjcmVlbiIsInNsZWVwIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwibXMiLCJzdGFydGVkIiwibmV4dCIsInJlcSIsInByb2Nlc3MiLCJicm93c2VyIiwicmVmZXJyZXIiLCJnZXQiLCJwYXJzZSIsInBhdGhuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsInRoZW4iLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFPd0JBLGE7O0FBUHhCOzs7Ozs7QUFFQTtBQUNBLElBQU1DLFFBQVEsU0FBUkEsS0FBUTtBQUFBLFNBQU0sSUFBSUMsT0FBSixDQUFZO0FBQUEsV0FBV0MsV0FBV0MsT0FBWCxFQUFvQkMsRUFBcEIsQ0FBWDtBQUFBLEdBQVosQ0FBTjtBQUFBLENBQWQ7QUFDQSxJQUFJQyxVQUFVLEtBQWQ7O0FBRUE7QUFDZSxTQUFTTixhQUFULE9BQWlDTyxJQUFqQyxFQUF1QztBQUFBLE1BQWJDLEdBQWEsUUFBYkEsR0FBYTs7QUFDcEQsTUFBSSxDQUFDQyxRQUFRQyxPQUFULElBQW9CLENBQUNKLE9BQXpCLEVBQWtDO0FBQ2hDQSxjQUFVLElBQVY7QUFDQSxXQUFPQyxNQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTUksV0FBV0gsSUFBSUksR0FBSixDQUFRLFVBQVIsQ0FBakI7QUFDQSxNQUFJRCxRQUFKLEVBQWM7QUFBQSxxQkFDUyxjQUFJRSxLQUFKLENBQVVGLFFBQVYsQ0FEVDs7QUFBQSxRQUNKRyxRQURJLGNBQ0pBLFFBREk7O0FBRVosUUFBSUEsYUFBYU4sSUFBSU0sUUFBckIsRUFBK0I7QUFDN0JDLGVBQVNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxZQUExQyxDQUF1RCxPQUF2RCxFQUFnRSxTQUFoRTtBQUNBLGFBQU9WLE9BQU9XLElBQVAsQ0FBWWpCLE1BQU1rQixJQUFOLENBQVcsSUFBWCxFQUFpQixHQUFqQixDQUFaLENBQVA7QUFDRDtBQUNGOztBQUVELFNBQU9aLE1BQVA7QUFDRCIsImZpbGUiOiJtaWRkbGV3YXJlL2xvYWRpbmctc2NyZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbnBpZXJjZXkvUGxheWdyb3VuZC9yaWxsLWRvY3MifQ==
