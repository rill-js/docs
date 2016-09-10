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

var _docs = require('./docs');

var _docs2 = _interopRequireDefault(_docs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (router) {
  router.use((0, _set2.default)('title', 'Rill Framework')).use((0, _set2.default)('description', 'Universal web application framework.')).setup(_home2.default).setup(_docs2.default).get('/*', (0, _redirect2.default)('/'));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJvdXRlciIsInVzZSIsInNldHVwIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLGtCQUFVO0FBQ3ZCQSxTQUNHQyxHQURILENBQ08sbUJBQUksT0FBSixFQUFhLGdCQUFiLENBRFAsRUFFR0EsR0FGSCxDQUVPLG1CQUFJLGFBQUosRUFBbUIsc0NBQW5CLENBRlAsRUFHR0MsS0FISCxpQkFJR0EsS0FKSCxpQkFLR0MsR0FMSCxDQUtPLElBTFAsRUFLYSx3QkFBUyxHQUFULENBTGI7QUFNRCIsImZpbGUiOiJ2aWV3cy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHlsYW5waWVyY2V5L1BsYXlncm91bmQvcmlsbC1kb2NzIn0=
