'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadingScreen;

var _miniUrl = require('mini-url');

var _miniUrl2 = _interopRequireDefault(_miniUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    var _url$parse = _miniUrl2.default.parse(referrer),
        pathname = _url$parse.pathname;

    if (pathname !== req.pathname) {
      var finishLoading = sleepAtleast(300);
      document.getElementById('loading-screen').setAttribute('class', 'loading');
      return next().then(finishLoading);
    }
  }

  return next();
}

// Creates a Promise that will wait for a minimum `ms`.
function sleepAtleast(ms) {
  var started = Date.now();
  return function () {
    var ended = Date.now();
    var delta = ended - started;
    var remaining = Math.max(0, ms - delta);
    return new Promise(function (resolve) {
      return setTimeout(resolve, remaining);
    });
  };
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvbG9hZGluZy1zY3JlZW4uanMiXSwibmFtZXMiOlsibG9hZGluZ1NjcmVlbiIsInN0YXJ0ZWQiLCJuZXh0IiwicmVxIiwicHJvY2VzcyIsImJyb3dzZXIiLCJyZWZlcnJlciIsImdldCIsInBhcnNlIiwicGF0aG5hbWUiLCJmaW5pc2hMb2FkaW5nIiwic2xlZXBBdGxlYXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsInRoZW4iLCJtcyIsIkRhdGUiLCJub3ciLCJlbmRlZCIsImRlbHRhIiwicmVtYWluaW5nIiwiTWF0aCIsIm1heCIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBSXdCQSxhOztBQUp4Qjs7Ozs7O0FBQ0EsSUFBSUMsVUFBVSxLQUFkOztBQUVBO0FBQ2UsU0FBU0QsYUFBVCxPQUFpQ0UsSUFBakMsRUFBdUM7QUFBQSxNQUFiQyxHQUFhLFFBQWJBLEdBQWE7O0FBQ3BELE1BQUksQ0FBQ0MsUUFBUUMsT0FBVCxJQUFvQixDQUFDSixPQUF6QixFQUFrQztBQUNoQ0EsY0FBVSxJQUFWO0FBQ0EsV0FBT0MsTUFBUDtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBLE1BQU1JLFdBQVdILElBQUlJLEdBQUosQ0FBUSxVQUFSLENBQWpCO0FBQ0EsTUFBSUQsUUFBSixFQUFjO0FBQUEscUJBQ1Msa0JBQUlFLEtBQUosQ0FBVUYsUUFBVixDQURUO0FBQUEsUUFDSkcsUUFESSxjQUNKQSxRQURJOztBQUVaLFFBQUlBLGFBQWFOLElBQUlNLFFBQXJCLEVBQStCO0FBQzdCLFVBQU1DLGdCQUFnQkMsYUFBYSxHQUFiLENBQXRCO0FBQ0FDLGVBQVNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxZQUExQyxDQUF1RCxPQUF2RCxFQUFnRSxTQUFoRTtBQUNBLGFBQU9aLE9BQU9hLElBQVAsQ0FBWUwsYUFBWixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPUixNQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTUyxZQUFULENBQXVCSyxFQUF2QixFQUEyQjtBQUN6QixNQUFNZixVQUFVZ0IsS0FBS0MsR0FBTCxFQUFoQjtBQUNBLFNBQU8sWUFBTTtBQUNYLFFBQU1DLFFBQVFGLEtBQUtDLEdBQUwsRUFBZDtBQUNBLFFBQU1FLFFBQVFELFFBQVFsQixPQUF0QjtBQUNBLFFBQU1vQixZQUFZQyxLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZUCxLQUFLSSxLQUFqQixDQUFsQjtBQUNBLFdBQU8sSUFBSUksT0FBSixDQUFZO0FBQUEsYUFBV0MsV0FBV0MsT0FBWCxFQUFvQkwsU0FBcEIsQ0FBWDtBQUFBLEtBQVosQ0FBUDtBQUNELEdBTEQ7QUFNRCIsImZpbGUiOiJtaWRkbGV3YXJlL2xvYWRpbmctc2NyZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbi9EZXZlbG9wbWVudC9mdW4vcmlsbC1kb2NzIn0=
