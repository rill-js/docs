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
var started = false;

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvbG9hZGluZy1zY3JlZW4uanMiXSwibmFtZXMiOlsibG9hZGluZ1NjcmVlbiIsInNsZWVwIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwibXMiLCJzdGFydGVkIiwibmV4dCIsInJlcSIsInJlZmVycmVyIiwiZ2V0IiwicGFyc2UiLCJwYXRobmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJ0aGVuIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBT3dCQTs7QUFQeEI7Ozs7OztBQUVBO0FBQ0EsSUFBTUMsUUFBUSxTQUFSQSxLQUFRO0FBQUEsU0FBTSxJQUFJQyxPQUFKLENBQVk7QUFBQSxXQUFXQyxXQUFXQyxPQUFYLEVBQW9CQyxFQUFwQixDQUFYO0FBQUEsR0FBWixDQUFOO0FBQUEsQ0FBZDtBQUNBLElBQUlDLFVBQVUsS0FBZDs7QUFFQTtBQUNlLFNBQVNOLGFBQVQsT0FBaUNPLElBQWpDLEVBQXVDO0FBQUEsTUFBYkMsR0FBYSxRQUFiQSxHQUFhOztBQUNwRCxNQUFJLENBQUNGLE9BQUwsRUFBYztBQUNaQSxjQUFVLElBQVY7QUFDQSxXQUFPQyxNQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTUUsV0FBV0QsSUFBSUUsR0FBSixDQUFRLFVBQVIsQ0FBakI7QUFDQSxNQUFJRCxRQUFKLEVBQWM7QUFBQSxxQkFDUyxjQUFJRSxLQUFKLENBQVVGLFFBQVYsQ0FEVDs7QUFBQSxRQUNKRyxRQURJLGNBQ0pBLFFBREk7O0FBRVosUUFBSUEsYUFBYUosSUFBSUksUUFBckIsRUFBK0I7QUFDN0JDLGVBQVNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxZQUExQyxDQUF1RCxPQUF2RCxFQUFnRSxTQUFoRTtBQUNBLGFBQU9SLE9BQU9TLElBQVAsQ0FBWWYsTUFBTWdCLElBQU4sQ0FBVyxJQUFYLEVBQWlCLEdBQWpCLENBQVosQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT1YsTUFBUDtBQUNEIiwiZmlsZSI6Im1pZGRsZXdhcmUvbG9hZGluZy1zY3JlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2R5bGFucGllcmNleS9QbGF5Z3JvdW5kL3JpbGwtZG9jcyJ9
