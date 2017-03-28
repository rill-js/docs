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

var text = '# Context\n\n  A Rill Context encapsulates node\'s `request` and `response` objects\n  into a single object which provides helpful methods for writing\n  web applications and APIs.\n\n  A `Context` is created _per_ request, and is provided to middleware\n  as the first argument. In an es2015 capable environment it is easy to pull\n  out parts of the context that you need (as seen in some examples) like so\n  `{ req, res, locals }`.\n\n```js\napp.use((ctx)=> {\n  ctx.req // is a Rill request.\n  ctx.res // is a Rill response.\n  ctx.locals // a place to store local variables.\n})\n```\n\n## API\n\n  `Context` specific methods and accessors.\n\n### ctx.req\n\n  A Rill `Request` object.\n\n### ctx.res\n\n  A Rill `Response` object.\n\n### ctx.locals\n\n  An object created during each incoming request that allows passing data between each middleware function.\n\n### ctx.fail(status, [message], [properties])\n\n  Helper method to throw an error with a `.status` property.\n\n```js\nctx.fail(403)\nctx.fail(400, \'name required\')\n```\n\n  For example `ctx.fail(400, \'name required\')` is equivalent to:\n\n```js\nconst err = new Error(\'name required\')\nerr.status = 400\nthrow err\n```\n\n  You may optionally pass a `properties` object which is merged into the error as-is,\n  useful for decorating machine-friendly errors which are reported to the requester upstream.\n\n```js\nctx.fail(401, \'access_denied\', { user: user })\n```\n\nRill uses [@rill/error](https://github.com/rill-js/error) to create errors.\n\n### ctx.assert(value, status, [msg], [properties])\n\n  Helper method to throw an error similar to `.fail()`\n  when `!value`. Similar to node\'s [assert()](http://nodejs.org/api/assert.html)\n  method.\n\n```js\nctx.assert(ctx.state.user, 401, \'User not found. Please login!\')\n```\n';

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

  function contextView(_x) {
    return _ref.apply(this, arguments);
  }

  return contextView;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2RvY3MvY29udGV4dC5qcyJdLCJuYW1lcyI6WyJ0ZXh0IiwiY3R4IiwicmVzIiwiYm9keSIsImNvbnRleHRWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0EsSUFBTUEsZ3lEQUFOOzs7dURBRWUsaUJBQTRCQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEMsZUFESyxHQUNHRCxHQURILENBQ0xDLEdBREs7O0FBRWJBLGdCQUFJQyxJQUFKLDBDQUdTLHdCQUFTLGtDQUFtQkgsSUFBbkIsRUFBeUJDLEdBQXpCLENBQVQsQ0FIVDs7QUFGYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlRyxXOzs7O1NBQUFBLFciLCJmaWxlIjoidmlld3MvZG9jcy9jb250ZXh0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbi9EZXZlbG9wbWVudC9mdW4vcmlsbC1kb2NzIn0=
