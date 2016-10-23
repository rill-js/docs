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

var text = '# Response\n\n  A Rill `Response` object is an abstraction on top of node\'s vanilla response object, or [@rill/http](https://github.com/rill-js/http) in the browser.\n  It provides additional functionality that is useful for every day development.\n\n## API\n\n### res.original\n\n Original nodejs/[@rill/http](https://github.com/rill-js/http) response object.\n\n### res.ctx\n\n The current [context](https://rill.site/context#docs).\n\n### res.headers\n\n  Original response header object.\n\n```js\nctx.res.headers // => { ... }\n```\n\n### res.status\n\n  Get response status. By default, `ctx.res.status` is `404` unlike node\'s `res.statusCode` which defaults to `200`.\n\n```js\nctx.res.status // => 200\n```\n\n### res.status=\n\n  Set response status via numeric code:\n\n  - 100 \'continue\'\n  - 101 \'switching protocols\'\n  - 102 \'processing\'\n  - 200 \'ok\'\n  - 201 \'created\'\n  - 202 \'accepted\'\n  - 203 \'non-authoritative information\'\n  - 204 \'no content\'\n  - 205 \'reset content\'\n  - 206 \'partial content\'\n  - 207 \'multi-status\'\n  - 300 \'multiple choices\'\n  - 301 \'moved permanently\'\n  - 302 \'moved temporarily\'\n  - 303 \'see other\'\n  - 304 \'not modified\'\n  - 305 \'use proxy\'\n  - 307 \'temporary redirect\'\n  - 400 \'bad request\'\n  - 401 \'unauthorized\'\n  - 402 \'payment required\'\n  - 403 \'forbidden\'\n  - 404 \'not found\'\n  - 405 \'method not allowed\'\n  - 406 \'not acceptable\'\n  - 407 \'proxy authentication required\'\n  - 408 \'request time-out\'\n  - 409 \'conflict\'\n  - 410 \'gone\'\n  - 411 \'length required\'\n  - 412 \'precondition failed\'\n  - 413 \'request entity too large\'\n  - 414 \'request-uri too large\'\n  - 415 \'unsupported media type\'\n  - 416 \'requested range not satisfiable\'\n  - 417 \'expectation failed\'\n  - 418 \'i\'m a teapot\'\n  - 422 \'unprocessable entity\'\n  - 423 \'locked\'\n  - 424 \'failed dependency\'\n  - 425 \'unordered collection\'\n  - 426 \'upgrade required\'\n  - 428 \'precondition required\'\n  - 429 \'too many requests\'\n  - 431 \'request header fields too large\'\n  - 500 \'internal server error\'\n  - 501 \'not implemented\'\n  - 502 \'bad gateway\'\n  - 503 \'service unavailable\'\n  - 504 \'gateway time-out\'\n  - 505 \'http version not supported\'\n  - 506 \'variant also negotiates\'\n  - 507 \'insufficient storage\'\n  - 509 \'bandwidth limit exceeded\'\n  - 510 \'not extended\'\n  - 511 \'network authentication required\'\n\n### res.message\n\n  Get response status message. By default, `res.message` is\n  associated with `res.status`.\n\n```js\nctx.res.message // => \'success\'\n```\n\n### res.message=\n\n  Set response status message to the given value.\n\n### res.respond=\n\n  Set `res.respond = false` to skip the automatic response built into Rill.\n\n### res.end=\n\n  Set `res.end = false` to only send response headers, but not end the request.\n\n### res.body\n\n  Get response body.\n\n```js\nctx.res.body // => \'<div>hello world</div>\'\n```\n\n### res.body=\n\n  Set response body to one of the following:\n\n  - `String` written (sets text/html or text/plain automatically)\n  - `Buffer` written\n  - `Stream` piped\n  - `Object` json-stringified\n  - `null` no content response\n\nIf `res.status` has not been set, Rill will automatically set the status to `200` or `204`.\n\n#### String\n\n  The Content-Type is defaulted to text/html or text/plain, both with\n  a default charset of utf-8. The Content-Length field is also set.\n\n#### Buffer\n\n  The Content-Type is defaulted to application/octet-stream, and Content-Length\n  is also set.\n\n#### Stream\n\n  The Content-Type will be inferred from the file name and is defaulted to application/octet-stream.\n\n#### Object\n\n  The Content-Type is defaulted to application/json.\n\n### res.get(field)\n\n  Get a response header field value with case-insensitive `field`.\n\n```js\nconst etag = res.get(\'ETag\')\n```\n\n### res.set(field, value)\n\n  Set response header `field` to `value`:\n\n```js\nres.set(\'Cache-Control\', \'no-cache\')\n```\n\n### res.append(field, value)\n  Append additional header `field` with value `val`.\n\n```js\nres.append(\'Link\', \'<http://127.0.0.1/>\')\n```\n\n### res.remove(field)\n\n  Remove header `field`.\n\n### res.cookie(key, value, [options])\n\n  Appends a new cookie header.\n\n```js\nres.cookie(\'a\', 1, { httpOnly: true })\n```\n\n### res.clearCookie(key)\n\n  Expires an existing cookie.\n\n```js\nres.clearCookie(\'a\')\n```\n\n### res.redirect(url, [alt])\n\n  Perform a [302] redirect to `url`.\n\n  The string \'back\' is special-cased\n  to provide Referrer support, when Referrer\n  is not present `alt` or `ctx.req.href` is used.\n\n```js\nres.redirect(\'back\')\nres.redirect(\'back\', \'/index.html\')\nres.redirect(\'/login\')\nres.redirect(\'http://google.com\')\n```\n\n  To alter the default status of `302`, simply assign the status\n  before or after this call. To alter the body, assign it after this call:\n\n```js\nres.status = 301\nres.redirect(\'/cart\')\nres.body = \'Redirecting to shopping cart\'\n```\n\n### res.refresh(delay, [url], [alt])\n\n  Sets the \'Refresh\' header causing the browser to redirect the user after `delay` seconds. Using \'back\' as a url will work the same as `res.redirect(\'back\')`.\n\n```js\n// Refresh the browser after 1 second.\nres.refresh(1)\n\n// Refresh the browser after 2 seconds and go to the login page.\nres.refresh(2, \'/login\')\n```\n';

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

  function responseView(_x) {
    return _ref.apply(this, arguments);
  }

  return responseView;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2RvY3MvcmVzcG9uc2UuanMiXSwibmFtZXMiOlsidGV4dCIsImN0eCIsInJlcyIsImJvZHkiLCJyZXNwb25zZVZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSw0MktBQU47Ozt1REFFZSxpQkFBNkJDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMQyxlQURLLEdBQ0dELEdBREgsQ0FDTEMsR0FESzs7QUFFYkEsZ0JBQUlDLElBQUosMENBR1Msd0JBQVMsa0NBQW1CSCxJQUFuQixFQUF5QkMsR0FBekIsQ0FBVCxDQUhUOztBQUZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O1dBQWVHLFk7Ozs7U0FBQUEsWSIsImZpbGUiOiJ2aWV3cy9kb2NzL3Jlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbnBpZXJjZXkvUGxheWdyb3VuZC9yaWxsLWRvY3MifQ==
