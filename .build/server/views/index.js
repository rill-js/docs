require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redirect = require('@rill/redirect');

var _redirect2 = _interopRequireDefault(_redirect);

var _set = require('@rill/set');

var _set2 = _interopRequireDefault(_set);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.use((0, _set2.default)('title', 'Rill')).use((0, _set2.default)('description', 'Isomorphic web application framework.')).setup(_home2.default).get('/*', (0, _redirect2.default)('/'));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2luZGV4LmpzIl0sIm5hbWVzIjpbImFwcCIsInVzZSIsInNldHVwIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSxlQUFPO0FBQ3BCQSxNQUNHQyxHQURILENBQ08sbUJBQUksT0FBSixFQUFhLE1BQWIsQ0FEUCxFQUVHQSxHQUZILENBRU8sbUJBQUksYUFBSixFQUFtQix1Q0FBbkIsQ0FGUCxFQUdHQyxLQUhILGlCQUlHQyxHQUpILENBSU8sSUFKUCxFQUlhLHdCQUFTLEdBQVQsQ0FKYjtBQUtEIiwiZmlsZSI6InZpZXdzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbnBpZXJjZXkvUGxheWdyb3VuZC9yaWxsLWRvY3MtaHRtbCJ9
