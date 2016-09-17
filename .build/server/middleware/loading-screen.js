require('source-map-support/register');'use strict';

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
var started = !process.browser;

// This middleware will bring up the loading screen when needed in the browser.
function loadingScreen(_ref, next) {
  var req = _ref.req;

  if (!started) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvbG9hZGluZy1zY3JlZW4uanMiXSwibmFtZXMiOlsibG9hZGluZ1NjcmVlbiIsInNsZWVwIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwibXMiLCJzdGFydGVkIiwicHJvY2VzcyIsImJyb3dzZXIiLCJuZXh0IiwicmVxIiwicmVmZXJyZXIiLCJnZXQiLCJwYXJzZSIsInBhdGhuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsInRoZW4iLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFPd0JBOztBQVB4Qjs7Ozs7O0FBRUE7QUFDQSxJQUFNQyxRQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUFNLElBQUlDLE9BQUosQ0FBWTtBQUFBLFdBQVdDLFdBQVdDLE9BQVgsRUFBb0JDLEVBQXBCLENBQVg7QUFBQSxHQUFaLENBQU47QUFBQSxDQUFkO0FBQ0EsSUFBSUMsVUFBVSxDQUFDQyxRQUFRQyxPQUF2Qjs7QUFFQTtBQUNlLFNBQVNSLGFBQVQsT0FBaUNTLElBQWpDLEVBQXVDO0FBQUEsTUFBYkMsR0FBYSxRQUFiQSxHQUFhOztBQUNwRCxNQUFJLENBQUNKLE9BQUwsRUFBYztBQUNaQSxjQUFVLElBQVY7QUFDQSxXQUFPRyxNQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTUUsV0FBV0QsSUFBSUUsR0FBSixDQUFRLFVBQVIsQ0FBakI7QUFDQSxNQUFJRCxRQUFKLEVBQWM7QUFBQSxxQkFDUyxjQUFJRSxLQUFKLENBQVVGLFFBQVYsQ0FEVDs7QUFBQSxRQUNKRyxRQURJLGNBQ0pBLFFBREk7O0FBRVosUUFBSUEsYUFBYUosSUFBSUksUUFBckIsRUFBK0I7QUFDN0JDLGVBQVNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxZQUExQyxDQUF1RCxPQUF2RCxFQUFnRSxTQUFoRTtBQUNBLGFBQU9SLE9BQU9TLElBQVAsQ0FBWWpCLE1BQU1rQixJQUFOLENBQVcsSUFBWCxFQUFpQixHQUFqQixDQUFaLENBQVA7QUFDRDtBQUNGOztBQUVELFNBQU9WLE1BQVA7QUFDRCIsImZpbGUiOiJtaWRkbGV3YXJlL2xvYWRpbmctc2NyZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbnBpZXJjZXkvUGxheWdyb3VuZC9yaWxsLWRvY3MifQ==
