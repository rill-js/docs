require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        <section id="docs">\n          <div class="content">\n            !', '\n            !', '\n          </div>\n        </section>\n      '], ['\n        <section id="docs">\n          <div class="content">\n            !', '\n            !', '\n          </div>\n        </section>\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n                <h1>What is Rill?</h1>\n              '], ['\n                <h1>What is Rill?</h1>\n              ']);

var _asHtml = require('as-html');

var _asHtml2 = _interopRequireDefault(_asHtml);

var _redirect = require('@rill/redirect');

var _redirect2 = _interopRequireDefault(_redirect);

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
  var ctx = shallowCopy(ctx);
  ctx.req = shallowCopy(ctx.req);
  ctx.res = shallowCopy(ctx.res);

  // Remove circular references.
  ctx.req.ctx = '[Circular Reference]';
  ctx.req.original = '[IncommingRequest]';
  ctx.res.ctx = '[Circular Reference]';
  ctx.res.original = '[ServerResponse]';

  return String(str).replace(matchCtxLiteral, function (match, prop, val) {
    return match.replace(val, (0, _circularJson.stringify)(eval((0, _he.decode)(prop)), null, 4));
  });
}

function shallowCopy(obj) {
  var result = {};
  for (var key in obj) {
    result[key] = obj[key];
  }return result;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2hvbWUuanMiXSwibmFtZXMiOlsibWF0Y2hDdHhMaXRlcmFsIiwiYXBwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ0ZXh0IiwicGF0aG5hbWUiLCJnZXQiLCJjdHgiLCJyZXMiLCJib2R5IiwicmVwbGFjZUN0eFByb3BzIiwic3RyIiwic2hhbGxvd0NvcHkiLCJyZXEiLCJvcmlnaW5hbCIsIlN0cmluZyIsInJlcGxhY2UiLCJtYXRjaCIsInByb3AiLCJ2YWwiLCJldmFsIiwib2JqIiwicmVzdWx0Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLDhCQUF4Qjs7a0JBRWUsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RCQyxTQUFPQyxJQUFQLGlCQUFrQkMsT0FBbEIsQ0FBMEIsb0JBQVk7QUFDcEMsUUFBTUMsT0FBTyx1QkFBUyxlQUFLQyxRQUFMLENBQVQsQ0FBYjtBQUNBTCxRQUFJTSxHQUFKLENBQVFELFFBQVIsRUFBa0IsVUFBQ0UsR0FBRCxFQUFTO0FBQ3pCQSxVQUFJQyxHQUFKLENBQVFDLElBQVIsMENBR1NKLGFBQWEsR0FBYiwyQ0FIVCxFQVFTSyxnQkFBZ0JOLElBQWhCLEVBQXNCRyxHQUF0QixDQVJUO0FBWUQsS0FiRDtBQWNELEdBaEJEO0FBaUJEOztBQUVELFNBQVNHLGVBQVQsQ0FBMEJDLEdBQTFCLEVBQStCSixHQUEvQixFQUFvQztBQUNsQyxNQUFJQSxNQUFNSyxZQUFZTCxHQUFaLENBQVY7QUFDQUEsTUFBSU0sR0FBSixHQUFVRCxZQUFZTCxJQUFJTSxHQUFoQixDQUFWO0FBQ0FOLE1BQUlDLEdBQUosR0FBVUksWUFBWUwsSUFBSUMsR0FBaEIsQ0FBVjs7QUFFQTtBQUNBRCxNQUFJTSxHQUFKLENBQVFOLEdBQVIsR0FBYyxzQkFBZDtBQUNBQSxNQUFJTSxHQUFKLENBQVFDLFFBQVIsR0FBbUIsb0JBQW5CO0FBQ0FQLE1BQUlDLEdBQUosQ0FBUUQsR0FBUixHQUFjLHNCQUFkO0FBQ0FBLE1BQUlDLEdBQUosQ0FBUU0sUUFBUixHQUFtQixrQkFBbkI7O0FBRUEsU0FBT0MsT0FBT0osR0FBUCxFQUFZSyxPQUFaLENBQW9CakIsZUFBcEIsRUFBcUMsVUFBQ2tCLEtBQUQsRUFBUUMsSUFBUixFQUFjQyxHQUFkLEVBQXNCO0FBQ2hFLFdBQU9GLE1BQU1ELE9BQU4sQ0FBY0csR0FBZCxFQUFtQiw2QkFBVUMsS0FBSyxnQkFBT0YsSUFBUCxDQUFMLENBQVYsRUFBOEIsSUFBOUIsRUFBb0MsQ0FBcEMsQ0FBbkIsQ0FBUDtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVELFNBQVNOLFdBQVQsQ0FBc0JTLEdBQXRCLEVBQTJCO0FBQ3pCLE1BQU1DLFNBQVMsRUFBZjtBQUNBLE9BQUssSUFBSUMsR0FBVCxJQUFnQkYsR0FBaEI7QUFBcUJDLFdBQU9DLEdBQVAsSUFBY0YsSUFBSUUsR0FBSixDQUFkO0FBQXJCLEdBQ0EsT0FBT0QsTUFBUDtBQUNEIiwiZmlsZSI6InZpZXdzL2hvbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2R5bGFucGllcmNleS9QbGF5Z3JvdW5kL3JpbGwtZG9jcy1odG1sIn0=
