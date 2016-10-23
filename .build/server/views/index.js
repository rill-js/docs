'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rill = require('rill');

var _rill2 = _interopRequireDefault(_rill);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _application = require('./docs/application');

var _application2 = _interopRequireDefault(_application);

var _context = require('./docs/context');

var _context2 = _interopRequireDefault(_context);

var _request = require('./docs/request');

var _request2 = _interopRequireDefault(_request);

var _response = require('./docs/response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _rill2.default)().get('/', _home2.default).get('/application', _application2.default).get('/context', _context2.default).get('/request', _request2.default).get('/response', _response2.default);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsc0JBQ1pBLEdBRFksQ0FDUixHQURRLGtCQUVaQSxHQUZZLENBRVIsY0FGUSx5QkFHWkEsR0FIWSxDQUdSLFVBSFEscUJBSVpBLEdBSlksQ0FJUixVQUpRLHFCQUtaQSxHQUxZLENBS1IsV0FMUSxxQiIsImZpbGUiOiJ2aWV3cy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHlsYW5waWVyY2V5L1BsYXlncm91bmQvcmlsbC1kb2NzIn0=
