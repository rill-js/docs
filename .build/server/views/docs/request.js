'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['<section id="docs"><div class="content">!', '</div></section>'], ['<section id="docs"><div class="content">!', '</div></section>']);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _asHtml = require('as-html');

var _asHtml2 = _interopRequireDefault(_asHtml);

var _markdown = require('../../utils/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _insertLiveExamples = require('../../utils/insert-live-examples');

var _insertLiveExamples2 = _interopRequireDefault(_insertLiveExamples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var text = '# Request\n\n  A Rill `Request` object is an abstraction on top of node\'s vanilla request object, or [@rill/http](https://github.com/rill-js/http) in the browser.\n  It provides additional functionality that is useful for every day development.\n\n## API\n\n### req.original\n\n Original nodejs/[@rill/http](https://github.com/rill-js/http) request object.\n\n### req.ctx\n\n The current [context](https://rill.site/context#docs).\n\n### req.headers\n\n Original request header object.\n\n```js\nctx.req.headers // => { ... }\n```\n\n### req.cookies\n\n Parsed cookies for the request.\n\n```js\nctx.req.cookies // => { ... }\n```\n\n### req.method\n\n Request method.\n\n ```js\nctx.req.method // => GET\n```\n\n### req.href\n\n  Get full request URL, include `protocol`, `host` and `url`.\n\n```js\nctx.req.href // => http://www.example.com/foo/bar?q=1#section\n```\n\n### req.origin\n\n  Get the origin of the request (protocol, hostname and port).\n\n```js\nctx.req.origin // => http://www.example.com\n```\n\n### req.protocol\n\n Protocol for the request.\n\n```js\nctx.req.protocol // => http\n```\n\n### req.hostname\n\n Host name for the request.\n Use `ctx.req.matchHost` for the hostname being matched in a mounted app.\n\n```js\nctx.req.hostname // => www.example.com\nctx.req.matchHost // => www.example.com\n```\n\n### req.port\n\n Port number for the request.\n\n```js\nctx.req.port // => 80\n```\n\n### req.host\n\n Host for the request, including port.\n\n```js\nctx.req.host // => www.example.com:80\n```\n\n### req.pathname\n\n The path section of the URL.\n Use `ctx.req.matchPath` for the pathname being matched in a mounted app.\n\n```js\nctx.req.pathname // => /foo/bar\nctx.req.matchPath // => /foo/bar\n```\n\n### req.path\n\n The concatenated pathname and querystring of the URL.\n\n```js\nctx.req.path // => /foo/bar?q=1\n```\n\n### req.search\n\n  Get raw query string including `?`.\n\n```js\nctx.req.search // => \'?q=1\'\n```\n\n### req.query\n\n A parsed querstring object.\n\n ```js\nctx.req.query // => { q: \'1\' }\n```\n\n### req.hash\n\n The hash fragment of the URL including the pound-sign (only in browser).\n\n```js\nctx.req.hash // => \'#section\'\n```\n\n### req.params\n\n An object containing the matches during a path middleware.\n\n```js\nctx.req.params // => {}\n```\n\n### req.secure\n\n  Shorthand for `ctx.req.protocol === \'https\'` to check if a request was\n  issued via TLS.\n\n```js\nctx.req.secure // => false\n```\n\n### req.ip\n\n  Request remote address. Supports `X-Forwarded-For`.\n\n```js\nctx.req.ip // => \'127.0.0.1\'\n```\n\n### req.subdomains\n\n  Return subdomains as an array.\n\n  Subdomains are the dot-separated parts of the host before the main domain of\n  the app. By default, the domain of the app is assumed to be the last two\n  parts of the host.\n\n```js\nctx.req.subdomains // => [\'www\']\n```\n\n### req.get(field)\n\n  Return specific request header (case insensitive).\n\n```js\nctx.req.get(\'Cookie\') // => \'...\'\n```\n';

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = ctx.res;

            res.body = (0, _asHtml2.default)(_templateObject, (0, _markdown2.default)((0, _insertLiveExamples2.default)(text, ctx)));

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function requestView(_x) {
    return _ref.apply(this, arguments);
  }

  return requestView;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2RvY3MvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ0ZXh0IiwiY3R4IiwicmVzIiwiYm9keSIsInJlcXVlc3RWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0EsSUFBTUEsMDhGQUFOOzs7dURBRWUsaUJBQTRCQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEMsZUFESyxHQUNHRCxHQURILENBQ0xDLEdBREs7O0FBRWJBLGdCQUFJQyxJQUFKLDBDQUdTLHdCQUFTLGtDQUFtQkgsSUFBbkIsRUFBeUJDLEdBQXpCLENBQVQsQ0FIVDs7QUFGYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlRyxXOzs7O1NBQUFBLFciLCJmaWxlIjoidmlld3MvZG9jcy9yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbi9EZXZlbG9wbWVudC9mdW4vcmlsbC1kb2NzIn0=
