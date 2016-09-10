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

var text = '# Context\n\n  A Rill Context encapsulates node\'s `request` and `response` objects\n  into a single object which provides helpful methods for writing\n  web applications and APIs.\n\n  A `Context` is created _per_ request, and is provided to middleware\n  as the first argument. In an es2015 capable environment it is easy to pull\n  out parts of the context that you need (as seen in some examples) like so\n  `{ req, res, locals }`.\n\n```js\napp.use((ctx)=> {\n  ctx.req // is a Rill request.\n  ctx.res // is a Rill response.\n  ctx.locals // a place to store local variables.\n})\n```\n\n## API\n\n  `Context` specific methods and accessors.\n\n### ctx.req\n\n  A Rill `Request` object.\n\n### ctx.res\n\n  A Rill `Response` object.\n\n### ctx.locals\n\n  An object created during each incoming request that allows passing data between each middleware function.\n\n### ctx.fail(status, [message], [properties])\n\n  Helper method to throw an error with a `.status` property.\n\n```js\nctx.fail(403)\nctx.fail(400, \'name required\')\n```\n\n  For example `ctx.fail(400, \'name required\')` is equivalent to:\n\n```js\nconst err = new Error(\'name required\')\nerr.status = 400\nthrow err\n```\n\n  You may optionally pass a `properties` object which is merged into the error as-is,\n  useful for decorating machine-friendly errors which are reported to the requester upstream.\n\n```js\nctx.fail(401, \'access_denied\', { user: user })\n```\n\nRill uses [@rill/error](https://github.com/rill-js/error) to create errors.\n\n### ctx.assert(value, status, [msg], [properties])\n\n  Helper method to throw an error similar to `.fail()`\n  when `!value`. Similar to node\'s [assert()](http://nodejs.org/api/assert.html)\n  method.\n\n```js\nctx.assert(ctx.state.user, 401, \'User not found. Please login!\')\n```\n';

exports.default = function (app) {
  app.get('/context', function (ctx) {
    var res = ctx.res;

    res.body = (0, _asHtml2.default)(_templateObject, (0, _markdown2.default)((0, _insertLiveExamples2.default)(text, ctx)));
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2RvY3MvY29udGV4dC5qcyJdLCJuYW1lcyI6WyJ0ZXh0IiwiYXBwIiwiZ2V0IiwicmVzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNQSxneURBQU47O2tCQUVlLGVBQU87QUFDcEJDLE1BQUlDLEdBQUosQ0FBUSxVQUFSLEVBQW9CLGVBQU87QUFBQSxRQUNqQkMsR0FEaUIsR0FDVEMsR0FEUyxDQUNqQkQsR0FEaUI7O0FBRXpCQSxRQUFJRSxJQUFKLDBDQUdTLHdCQUFTLGtDQUFtQkwsSUFBbkIsRUFBeUJJLEdBQXpCLENBQVQsQ0FIVDtBQU9ELEdBVEQ7QUFVRCIsImZpbGUiOiJ2aWV3cy9kb2NzL2NvbnRleHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2R5bGFucGllcmNleS9QbGF5Z3JvdW5kL3JpbGwtZG9jcyJ9
