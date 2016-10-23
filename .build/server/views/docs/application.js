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

var text = '# Introduction\n\n  Rill is supported in all recent versions of [nodejs](https://nodejs.org) and modern browsers including IE10.\n  It allows you to create an isomorphic/universal web application that will share the majority of your apps code between the client and the server.\n  This means quick page loads with server side rendering and a blazing fast client side experience with JavaScript enhancement.\n\n# Application\n\n  A Rill application is an object containing an array of middleware functions\n  which are composed and executed in a stack-like manner upon request.\n  Rill is similar to other [nodejs](https://nodejs.org) frameworks such as\n  [Express](https://github.com/expressjs/express), [Hapi](https://github.com/hapijs/hapi)\n  and [Koa](https://github.com/koajs/koa) with one important distinction;\n  It can run in the browser.\n\n  Rill comes with many essential utilities for building modern web applications.\n  This includes: Routing, redirection, cookies, and more. Typically a universal\n  rendering solution will also be used such as [@rill/react](https://github.com/rill-js/react)\n  or [@rill/html](https://github.com/rill-js/html) which allow full page\n  applications to work seamlessly on the server and in the browser.\n\n```js\n// Modules\nimport Rill from \'rill\'\n\n// CommonJS\nconst Rill = require(\'rill\')\n\n// Creating an application (new optional).\nconst app = new Rill()\n```\n\n## app.listen({ port, host, backlog, tls }, callback)\n\n  A Rill application is not a 1-to-1 representation of a HTTP server.\n  One or more Rill applications may be mounted together to form larger\n  applications and you can even listen to multiple ports with a single HTTP server.\n\n  All arguments to `listen` are optional and will work similarly to the native [http#listen](https://nodejs.org/api/http.html#http_server_listen_handle_callback).\n\n  `listen` will start an HTTPS server if the `tls` option is provided.\n  The tls options are the same as nodes [TLS](https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener) module.\n\n  The `ip`, `port` and `backlog` options are forwarded to `Server#listen()`. These are simply ignored in the browser.\n\n  The following is a useless Rill application bound to port `3000`:\n\n```js\napp.listen({ port: 3000 })\n```\n\n  Or we can start a HTTPS server with the same API.\n\n```js\nvar options = {\n  key: fs.readFileSync(\'test/fixtures/keys/agent2-key.pem\'),\n  cert: fs.readFileSync(\'test/fixtures/keys/agent2-cert.pem\')\n}\n\napp.listen({ port: 8000, tls: options })\n```\n\n## app.handler()\n\n  Return a callback function suitable for the `http.createServer()`\n  method to handle a request.\n  You may also use this callback function to mount your rill app in a\n  Connect/Express app.\n\n  This means you can spin up the same application as both HTTP and HTTPS\n  or on multiple addresses:\n\n```js\n// For universal use you can use @rill/http(s) instead of nodes http module.\nhttp.createServer(app.handler()).listen(3000)\nhttp.createServer(app.handler()).listen(3001)\n```\n\n## app.stack\n\n  The current middleware stack for the application as an array.\n\n## app.setup(function...)\n\n  Simple syntactic sugar for middleware that wish do more than just add to the stack.\n  This is useful for modifying/extending Rill and for other complex plugins.\n\n```js\napp.setup((myapp)=> {\n  myapp === app // myapp is just a reference to the existing app.\n  myapp.customMethod = ... // Set custom methods on the rill instance.\n  myapp.use(customMiddleware) // Setup extra middleware/routes/etc.\n})\n```\n\n## app.use(function|application...)\n\n  Add the given middleware function to this application.\n  See [Middleware](https://github.com/rill-js/rill/wiki#middleware) for more information.\n  In Rill you can also mount other applications.\n\n```js\n// Simple logging middleware.\napp.use(async ({ req, res }, next)=> {\n  const start = new Date\n\n  // Rill uses promises for control flow.\n  // ES2016 async functions work great as well!\n  await next()\n\n  const ms = new Date - start\n  console.log(`${req.method} ${req.url} - ${ms}`)\n})\n```\n\n## app.at(function|application...)\n\n  Add a middleware that will only be ran if a path string is matched.\n  Rill uses the same path matching library as Express and some other node frameworks. You can test out your own path regular expressions [here](http://forbeslindesay.github.io/express-route-tester/).\n\n```js\n// Match request for the route path.\napp.at(\'/\', ...)\n\n// Params will also be provided under req.params\n// For example using /api/user\napp.at(\'/api/:resource\', ({ req })=>\n  req.params.resource === \'user\'\n)\n```\n\n## app|METHOD|([path], function|application...)`\n\n  Add a middleware that will only be ran if an optional path string is matched\n  and the request has the used method.\n\n```js\n// Match all get requests.\napp.get(...)\n\n// Match request for the route path and uses the GET method.\napp.get(\'/\', ...)\n\n// Even mount routers for a more modular experience.\napp.get(\'/api/*\',\n  rill().get(\'/v1\', ...) // matches `/api/v1`\n)\n```\n\n## app.host(hostname, function|application...)\n\n  Adds middleware that will only be ran if a hostname is matched. The hostname may use the same regular expression strings used in the other routing methods. You can test out your own hostname regular expressions [here](http://forbeslindesay.github.io/express-route-tester/).\n\n```js\n// Match request for a specific host.\napp.host(\'test.com\', ...)\n\n// Subdomain matches will also be provided under req.subdomains\n// For example using api.user.test.com\napp.host(\'api.:resource.test.com\', { req })=>\n  res.subdomains.resource === \'user\'\n  res.subdomains == [\'api\', \'user\']\n)\n```\n\n## Error Handling\n\n  Rill defers error handling to the promises used within Rill middleware.\n  In rill the `next` middleware will always return a promise.\n\n```js\n// async functions not required.\napp.use(async (ctx, next)=> {\n  try {\n    await next()\n  } catch (error) {\n    // Catch errors later on in the stack.\n    log.error(\'server error\', err)\n  }\n})\n```\n';

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

  function applicationView(_x) {
    return _ref.apply(this, arguments);
  }

  return applicationView;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2RvY3MvYXBwbGljYXRpb24uanMiXSwibmFtZXMiOlsidGV4dCIsImN0eCIsInJlcyIsImJvZHkiLCJhcHBsaWNhdGlvblZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSw0ak1BQU47Ozt1REFFZSxpQkFBZ0NDLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMQyxlQURLLEdBQ0dELEdBREgsQ0FDTEMsR0FESzs7QUFFYkEsZ0JBQUlDLElBQUosMENBR1Msd0JBQVMsa0NBQW1CSCxJQUFuQixFQUF5QkMsR0FBekIsQ0FBVCxDQUhUOztBQUZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O1dBQWVHLGU7Ozs7U0FBQUEsZSIsImZpbGUiOiJ2aWV3cy9kb2NzL2FwcGxpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbnBpZXJjZXkvUGxheWdyb3VuZC9yaWxsLWRvY3MifQ==
