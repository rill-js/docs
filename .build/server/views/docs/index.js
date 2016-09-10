require('source-map-support/register');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _application = require('./application');

var _application2 = _interopRequireDefault(_application);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _response = require('./response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (router) {
  router.setup(_application2.default).setup(_context2.default).setup(_request2.default).setup(_response2.default);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2RvY3MvaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwic2V0dXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsa0JBQVU7QUFDdkJBLFNBQ0dDLEtBREgsd0JBRUdBLEtBRkgsb0JBR0dBLEtBSEgsb0JBSUdBLEtBSkg7QUFNRCIsImZpbGUiOiJ2aWV3cy9kb2NzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbnBpZXJjZXkvUGxheWdyb3VuZC9yaWxsLWRvY3MifQ==
