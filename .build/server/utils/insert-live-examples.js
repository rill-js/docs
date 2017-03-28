'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertLiveExamples;
var matchCtxLiteral = /(ctx\.[^ ;]+);? ?\/\/ (.*)?/g;

/**
 * This utility will go through a string and find any examples that look like `ctx.req.query`.
 * It will then replace all of these strings with their current live value.
 */
function insertLiveExamples(str, ctx) {
  ctx = shallowCopy(ctx);
  ctx.req = shallowCopy(ctx.req);
  ctx.res = shallowCopy(ctx.res);

  // Remove circular references.
  ctx.req.ctx = '[Circular Reference]';
  ctx.req.original = '[IncommingRequest]';
  ctx.res.ctx = '[Circular Reference]';
  ctx.res.original = '[ServerResponse]';

  return String(str).replace(matchCtxLiteral, function (match, prop, val) {
    return match.replace(val, JSON.stringify(eval(prop), null, 4)); // eslint-disable-line
  });
}

/**
 * Creates a shallow copy of an object.
 */
function shallowCopy(obj) {
  var result = {};
  for (var key in obj) {
    result[key] = obj[key];
  }return result;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2luc2VydC1saXZlLWV4YW1wbGVzLmpzIl0sIm5hbWVzIjpbImluc2VydExpdmVFeGFtcGxlcyIsIm1hdGNoQ3R4TGl0ZXJhbCIsInN0ciIsImN0eCIsInNoYWxsb3dDb3B5IiwicmVxIiwicmVzIiwib3JpZ2luYWwiLCJTdHJpbmciLCJyZXBsYWNlIiwibWF0Y2giLCJwcm9wIiwidmFsIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2YWwiLCJvYmoiLCJyZXN1bHQiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQU13QkEsa0I7QUFOeEIsSUFBTUMsa0JBQWtCLDhCQUF4Qjs7QUFFQTs7OztBQUllLFNBQVNELGtCQUFULENBQTZCRSxHQUE3QixFQUFrQ0MsR0FBbEMsRUFBdUM7QUFDcERBLFFBQU1DLFlBQVlELEdBQVosQ0FBTjtBQUNBQSxNQUFJRSxHQUFKLEdBQVVELFlBQVlELElBQUlFLEdBQWhCLENBQVY7QUFDQUYsTUFBSUcsR0FBSixHQUFVRixZQUFZRCxJQUFJRyxHQUFoQixDQUFWOztBQUVBO0FBQ0FILE1BQUlFLEdBQUosQ0FBUUYsR0FBUixHQUFjLHNCQUFkO0FBQ0FBLE1BQUlFLEdBQUosQ0FBUUUsUUFBUixHQUFtQixvQkFBbkI7QUFDQUosTUFBSUcsR0FBSixDQUFRSCxHQUFSLEdBQWMsc0JBQWQ7QUFDQUEsTUFBSUcsR0FBSixDQUFRQyxRQUFSLEdBQW1CLGtCQUFuQjs7QUFFQSxTQUFPQyxPQUFPTixHQUFQLEVBQVlPLE9BQVosQ0FBb0JSLGVBQXBCLEVBQXFDLFVBQUNTLEtBQUQsRUFBUUMsSUFBUixFQUFjQyxHQUFkLEVBQXNCO0FBQ2hFLFdBQU9GLE1BQU1ELE9BQU4sQ0FBY0csR0FBZCxFQUFtQkMsS0FBS0MsU0FBTCxDQUFlQyxLQUFLSixJQUFMLENBQWYsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakMsQ0FBbkIsQ0FBUCxDQURnRSxDQUNEO0FBQ2hFLEdBRk0sQ0FBUDtBQUdEOztBQUVEOzs7QUFHQSxTQUFTUCxXQUFULENBQXNCWSxHQUF0QixFQUEyQjtBQUN6QixNQUFNQyxTQUFTLEVBQWY7QUFDQSxPQUFLLElBQUlDLEdBQVQsSUFBZ0JGLEdBQWhCO0FBQXFCQyxXQUFPQyxHQUFQLElBQWNGLElBQUlFLEdBQUosQ0FBZDtBQUFyQixHQUNBLE9BQU9ELE1BQVA7QUFDRCIsImZpbGUiOiJ1dGlscy9pbnNlcnQtbGl2ZS1leGFtcGxlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHlsYW4vRGV2ZWxvcG1lbnQvZnVuL3JpbGwtZG9jcyJ9
