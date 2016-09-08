require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        <section id="docs">\n          <div class="content">\n            !', '\n            !', '\n          </div>\n        </section>\n      '], ['\n        <section id="docs">\n          <div class="content">\n            !', '\n            !', '\n          </div>\n        </section>\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n                <h1>What is Rill?</h1>\n              '], ['\n                <h1>What is Rill?</h1>\n              ']);

var _asHtml = require('as-html');

var _asHtml2 = _interopRequireDefault(_asHtml);

var _circularJson = require('circular-json');

var _he = require('he');

var _docs = require('../docs');

var _docs2 = _interopRequireDefault(_docs);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var matchCtxLiteral = /(ctx\.[^ ;]+);? ?\/\/ (.*)?/g;

exports.default = function (app) {
  Object.keys(_docs2.default).forEach(function (pathname) {
    var text = (0, _helpers.markdown)(_docs2.default[pathname]);
    app.get(pathname, function (ctx) {
      ctx.res.body = (0, _asHtml2.default)(_templateObject, pathname === '/' && (0, _asHtml2.default)(_templateObject2), replaceCtxProps(text, ctx));
    });
  });
};

function replaceCtxProps(str, ctx) {
  ctx = shallowCopy(ctx);
  ctx.req = shallowCopy(ctx.req);
  ctx.res = shallowCopy(ctx.res);

  // Remove circular references.
  ctx.req.ctx = '[Circular Reference]';
  ctx.req.original = '[IncommingRequest]';
  ctx.res.ctx = '[Circular Reference]';
  ctx.res.original = '[ServerResponse]';

  return String(str).replace(matchCtxLiteral, function (match, prop, val) {
    return match.replace(val, (0, _circularJson.stringify)(eval((0, _he.decode)(prop)), null, 4)); // eslint-disable-line
  });
}

function shallowCopy(obj) {
  var result = {};
  for (var key in obj) {
    result[key] = obj[key];
  }return result;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2hvbWUuanMiXSwibmFtZXMiOlsibWF0Y2hDdHhMaXRlcmFsIiwiYXBwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ0ZXh0IiwicGF0aG5hbWUiLCJnZXQiLCJjdHgiLCJyZXMiLCJib2R5IiwicmVwbGFjZUN0eFByb3BzIiwic3RyIiwic2hhbGxvd0NvcHkiLCJyZXEiLCJvcmlnaW5hbCIsIlN0cmluZyIsInJlcGxhY2UiLCJtYXRjaCIsInByb3AiLCJ2YWwiLCJldmFsIiwib2JqIiwicmVzdWx0Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGtCQUFrQiw4QkFBeEI7O2tCQUVlLFVBQUNDLEdBQUQsRUFBUztBQUN0QkMsU0FBT0MsSUFBUCxpQkFBa0JDLE9BQWxCLENBQTBCLG9CQUFZO0FBQ3BDLFFBQU1DLE9BQU8sdUJBQVMsZUFBS0MsUUFBTCxDQUFULENBQWI7QUFDQUwsUUFBSU0sR0FBSixDQUFRRCxRQUFSLEVBQWtCLFVBQUNFLEdBQUQsRUFBUztBQUN6QkEsVUFBSUMsR0FBSixDQUFRQyxJQUFSLDBDQUdTSixhQUFhLEdBQWIsMkNBSFQsRUFRU0ssZ0JBQWdCTixJQUFoQixFQUFzQkcsR0FBdEIsQ0FSVDtBQVlELEtBYkQ7QUFjRCxHQWhCRDtBQWlCRDs7QUFFRCxTQUFTRyxlQUFULENBQTBCQyxHQUExQixFQUErQkosR0FBL0IsRUFBb0M7QUFDbENBLFFBQU1LLFlBQVlMLEdBQVosQ0FBTjtBQUNBQSxNQUFJTSxHQUFKLEdBQVVELFlBQVlMLElBQUlNLEdBQWhCLENBQVY7QUFDQU4sTUFBSUMsR0FBSixHQUFVSSxZQUFZTCxJQUFJQyxHQUFoQixDQUFWOztBQUVBO0FBQ0FELE1BQUlNLEdBQUosQ0FBUU4sR0FBUixHQUFjLHNCQUFkO0FBQ0FBLE1BQUlNLEdBQUosQ0FBUUMsUUFBUixHQUFtQixvQkFBbkI7QUFDQVAsTUFBSUMsR0FBSixDQUFRRCxHQUFSLEdBQWMsc0JBQWQ7QUFDQUEsTUFBSUMsR0FBSixDQUFRTSxRQUFSLEdBQW1CLGtCQUFuQjs7QUFFQSxTQUFPQyxPQUFPSixHQUFQLEVBQVlLLE9BQVosQ0FBb0JqQixlQUFwQixFQUFxQyxVQUFDa0IsS0FBRCxFQUFRQyxJQUFSLEVBQWNDLEdBQWQsRUFBc0I7QUFDaEUsV0FBT0YsTUFBTUQsT0FBTixDQUFjRyxHQUFkLEVBQW1CLDZCQUFVQyxLQUFLLGdCQUFPRixJQUFQLENBQUwsQ0FBVixFQUE4QixJQUE5QixFQUFvQyxDQUFwQyxDQUFuQixDQUFQLENBRGdFLENBQ0U7QUFDbkUsR0FGTSxDQUFQO0FBR0Q7O0FBRUQsU0FBU04sV0FBVCxDQUFzQlMsR0FBdEIsRUFBMkI7QUFDekIsTUFBTUMsU0FBUyxFQUFmO0FBQ0EsT0FBSyxJQUFJQyxHQUFULElBQWdCRixHQUFoQjtBQUFxQkMsV0FBT0MsR0FBUCxJQUFjRixJQUFJRSxHQUFKLENBQWQ7QUFBckIsR0FDQSxPQUFPRCxNQUFQO0FBQ0QiLCJmaWxlIjoidmlld3MvaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHlsYW5waWVyY2V5L1BsYXlncm91bmQvcmlsbC1kb2NzLWh0bWwifQ==
