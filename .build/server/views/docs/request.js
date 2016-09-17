require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n      <section id="docs">\n        <div class="content">\n          !', '\n        </div>\n      </section>\n    '], ['\n      <section id="docs">\n        <div class="content">\n          !', '\n        </div>\n      </section>\n    ']);

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

var text = '# Request\n\n  A Rill `Request` object is an abstraction on top of node\'s vanilla request object, or [@rill/http](https://github.com/rill-js/http) in the browser.\n  It provides additional functionality that is useful for every day development.\n\n## API\n\n### req.original\n\n Original nodejs/[@rill/http](https://github.com/rill-js/http) request object.\n\n### req.ctx\n\n The current [context](https://rill.site/context#docs).\n\n### req.headers\n\n Original request header object.\n\n```js\nctx.req.headers // => { ... }\n```\n\n### req.cookies\n\n Parsed cookies for the request.\n\n```js\nctx.req.cookies // => { ... }\n```\n\n### req.method\n\n Request method.\n\n ```js\nctx.req.method // => GET\n```\n\n### req.href\n\n  Get full request URL, include `protocol`, `host` and `url`.\n\n```js\nctx.req.href // => http://www.example.com/foo/bar?q=1#section\n```\n\n### req.origin\n\n  Get the origin of the request (protocol, hostname and port).\n\n```js\nctx.req.origin // => http://www.example.com\n```\n\n### req.protocol\n\n Protocol for the request.\n\n```js\nctx.req.protocol // => http\n```\n\n### req.hostname\n\n Host name for the request.\n\n```js\nctx.req.hostname // => www.example.com\n```\n\n### req.port\n\n Port number for the request.\n\n```js\nctx.req.port // => 80\n```\n\n### req.host\n\n Host for the request, including port.\n\n```js\nctx.req.host // => www.example.com:80\n```\n\n### req.pathname\n\n The path section of the URL.\n\n```js\nctx.req.pathname // => /foo/bar\n```\n\n### req.path\n\n The concatenated pathname and querystring of the URL.\n\n```js\nctx.req.path // => /foo/bar?q=1\n```\n\n### req.search\n\n  Get raw query string including `?`.\n\n```js\nctx.req.search // => \'?q=1\'\n```\n\n### req.query\n\n A parsed querstring object.\n\n ```js\nctx.req.query // => { q: \'1\' }\n```\n\n### req.hash\n\n The hash fragment of the URL including the pound-sign (only in browser).\n\n```js\nctx.req.hash // => \'#section\'\n```\n\n### req.params\n\n An object containing the matches during a path middleware.\n\n```js\nctx.req.params // => {}\n```\n\n### req.secure\n\n  Shorthand for `ctx.req.protocol === \'https\'` to check if a request was\n  issued via TLS.\n\n```js\nctx.req.secure // => false\n```\n\n### req.ip\n\n  Request remote address. Supports `X-Forwarded-For`.\n\n```js\nctx.req.ip // => \'127.0.0.1\'\n```\n\n### req.subdomains\n\n  Return subdomains as an array.\n\n  Subdomains are the dot-separated parts of the host before the main domain of\n  the app. By default, the domain of the app is assumed to be the last two\n  parts of the host.\n\n```js\nctx.req.subdomains // => [\'www\']\n```\n\n### req.get(field)\n\n  Return specific request header (case insensitive).\n\n```js\nctx.req.get(\'Cookie\') // => \'...\'\n```\n';

exports.default = function (app) {
  app.get('/request', function (ctx) {
    var res = ctx.res;

    res.body = (0, _asHtml2.default)(_templateObject, (0, _markdown2.default)((0, _insertLiveExamples2.default)(text, ctx)));
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2RvY3MvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ0ZXh0IiwiYXBwIiwiZ2V0IiwicmVzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNQSx5dUZBQU47O2tCQUVlLGVBQU87QUFDcEJDLE1BQUlDLEdBQUosQ0FBUSxVQUFSLEVBQW9CLGVBQU87QUFBQSxRQUNqQkMsR0FEaUIsR0FDVEMsR0FEUyxDQUNqQkQsR0FEaUI7O0FBRXpCQSxRQUFJRSxJQUFKLDBDQUdTLHdCQUFTLGtDQUFtQkwsSUFBbkIsRUFBeUJJLEdBQXpCLENBQVQsQ0FIVDtBQU9ELEdBVEQ7QUFVRCIsImZpbGUiOiJ2aWV3cy9kb2NzL3JlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2R5bGFucGllcmNleS9QbGF5Z3JvdW5kL3JpbGwtZG9jcyJ9
