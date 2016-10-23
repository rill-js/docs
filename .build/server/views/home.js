'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['<section id="docs"><div class="content"><h1>What is Rill?</h1>!', '</div></section>'], ['<section id="docs"><div class="content"><h1>What is Rill?</h1>!', '</div></section>']);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _asHtml = require('as-html');

var _asHtml2 = _interopRequireDefault(_asHtml);

var _markdown = require('../utils/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _insertLiveExamples = require('../utils/insert-live-examples');

var _insertLiveExamples2 = _interopRequireDefault(_insertLiveExamples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var text = '<h1 align="center">\n  <!-- Logo -->\n  <a href="https://rill.site" alt="Rill">\n    <img src="https://rill.site/logo.svg" width="300" alt="Rill Logo"/>\n  </a>\n\n  <br/>\n\n  <!-- Stability -->\n  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">\n    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>\n  </a>\n  <!-- Standard -->\n  <a href="https://github.com/feross/standard">\n    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>\n  </a>\n  <!-- NPM version -->\n  <a href="https://npmjs.org/package/rill">\n    <img src="https://img.shields.io/npm/v/rill.svg?style=flat-square" alt="NPM version"/>\n  </a>\n  <!-- Travis build -->\n  <a href="https://travis-ci.org/rill-js/rill">\n  <img src="https://img.shields.io/travis/rill-js/rill.svg?style=flat-square" alt="Build status"/>\n  </a>\n  <!-- Coveralls coverage -->\n  <a href="https://coveralls.io/github/rill-js/rill">\n    <img src="https://img.shields.io/coveralls/rill-js/rill.svg?style=flat-square" alt="Test Coverage"/>\n  </a>\n  <!-- File size -->\n  <a href="https://github.com/rill-js/rill/blob/master/dist/rill.js">\n    <img src="https://badge-size.herokuapp.com/rill-js/rill/master/dist/rill.js?style=flat-square" alt="File size"/>\n  </a>\n  <!-- Downloads -->\n  <a href="https://npmjs.org/package/rill">\n    <img src="https://img.shields.io/npm/dm/rill.svg?style=flat-square" alt="Downloads"/>\n  </a>\n  <!-- Gitter chat -->\n  <a href="https://gitter.im/rill-js/rill">\n    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>\n  </a>\n</h1>\n\nExpressive HTTP middleware for [nodejs](https://nodejs.org) and the browser.\nRill brings cascading middleware to the browser and enables fully universal web applications.\nIt makes apps enjoyable to write with a simpler top down mental model of your app and free progressive enhancement.\n\nRill provides the minimum for abstractions over [nodejs](https://nodejs.org) and the browser enabling things like routing (with redirecting, refreshes and more), cookies, and middleware with the same api.\n\n# Installation\n\n\n#### Npm\n```console\nnpm install rill\n```\n\n#### Bower\n```console\nbower install rill\n```\n\n<h4><a href="https://raw.githubusercontent.com/rill-js/rill/master/dist/rill.js" download>Download</a></h4>\n```html\n<script type="text/javascript" src="rill.js"></script>\n<script>\n    define([\'rill\'], function (rill) {...}) // AMD\n    window.rill // Global rill if no module system in place.\n</script>\n```\n\n# Community\n\n* [API](https://rill.site/application#docs) documentation.\n* [Examples](https://github.com/rill-js/todomvc)\n* [Middleware](https://github.com/rill-js/rill/wiki) list\n* [Wiki](https://github.com/rill-js/rill/wiki)\n* [Gitter Community](https://gitter.im/rill-js/rill)\n* [Reddit Community](https://www.reddit.com/r/Rill)\n\n# Articles\n\n* [Isomorphic Javascript, let\u2019s make it easier.](https://medium.com/@pierceydylan/isomorphic-javascript-it-just-has-to-work-b9da5b0c8035)\n* [Browsers, Servers, and APIs](https://medium.com/@iamjohnhenry/browsers-servers-and-apis-2f7b10523f39)\n* [Why Everyone is Talking About Isomorphic](https://medium.com/capital-one-developers/why-everyone-is-talking-about-isomorphic-universal-javascript-and-why-it-matters-38c07c87905#.mdd84j28m)\n\n# Why Rill?\nRill is the answer to a simple question; Can I run my [Express](https://github.com/expressjs/express) style router in the browser? Turns out you can and it works awesome.\n\nIt brings a common interface to many typical app like features in both the browser and [nodejs](https://nodejs.org). Many isomorphic frameworks have crazy abstractions and learning curves but with Rill, if you understand [Express](https://github.com/expressjs/express) or [Koa](https://github.com/koajs/koa), you already know how the routing works! In Rill you get to program much of your application logic using the same api (client or server) including routing, rendering, data fetching and more are easily shared.\n\nRill also works perfectly as a stand alone [nodejs](https://nodejs.org) server or a stand alone browser framework. This allows for easy progressive enhancement. If all is well the browser can handle much of your application logic and if JavaScript fails for any reason your server knows exactly what to do.\n\n# How does this thing work?\nIf you look at the source for Rill [here](https://github.com/rill-js/rill/tree/master/src) you will quickly notice there is ZERO browser specific code. This is all thanks to [@rill/http](https://github.com/rill-js/http) which is node\'s [HTTP.createServer](https://nodejs.org/api/http.html#http_http_createserver_requestlistener) ported to the browser.\n\nIn the browser it works by listening for internal link clicks, form submissions and browser history changes. It will then create a [Rill Context](https://rill.site/context#docs) for each of these events and emit it through the router, similar to how receiving a request works in [nodejs](https://nodejs.org).\n\nIt supports everything you\'d expect from a client side [nodejs](https://nodejs.org) server. This includes redirects, refreshes, cookies, scrolling and url updates using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History).\n\n# Example\n\n### Create an app\n\n```javascript\n/**\n * The following code can run 100% in the browser or in nodejs.\n * Examples use es2015/2016 with Babel and JSX but this is optional.\n */\n\nimport rill from \'rill\'\nconst app = rill()\n```\n\n### Setup middleware\n\n```javascript\n// Universal form data parsing middleware.\nimport bodyParser from \'@rill/body\'\napp.use(bodyParser())\n\n// Universal react rendering middleware.\nimport reactRenderer from \'@rill/react\'\napp.use(reactRenderer())\n\n// Example Logger\napp.use(async ({ req }, next)=> {\n\tconst start = new Date\n\n\t// Rill uses promises for control flow.\n\t// ES2016 async functions work great as well!\n\tawait next()\n\n\tconst ms = new Date - start\n\tconsole.log(`${req.method} ${req.url} - ${ms}`)\n})\n```\n\n### Setup a page\n\n```javascript\n// Respond to a GET request.\napp.get(\'/todos\', async ({ res })=> {\n\t// Fetch a todolist from some service.\n\tconst todolist = await MyTodoListService.getAllTodos()\n\n\t// Directly set React virtual dom to the body thanks to @rill/react.\n\t// (Checkout @rill/html for universal html diffing).\n\tres.body = (\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t<title>My App</title>\n\t\t\t\t<meta name="description" content="Rill Application">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<form action="/add-todo" method="POST">\n\t\t\t\t\t<h1>Just a plain old form</h1>\n\t\t\t\t\t<input type="text" name="todo"/>\n\t\t\t\t\t<button type="submit">Add Todo</button>\n\t\t\t\t</form>\n\n\t\t\t\t{todolist.length\n\t\t\t\t\t? todolist.map(renderTodo)\n\t\t\t\t\t: \'No todos to display.\'\n\t\t\t\t}\n\t\t\t\t<script src="/app.js"/>\n\t\t\t</body>\n\t\t</html>\n\t)\n})\n```\n\n### Handle a form submission\n```javascript\n// Respond to a POST request.\napp.post(\'/add-todo\', async ({ req, res })=> {\n\t// We handle form submissions with Rill the same way one would with any other node framework.\n\t// Here we are simply adding the todo via some service.\n\tawait MyTodoListService.addTodo({ text: req.body.todo })\n\t// And then we redirect back (same as res.redirect(\'/todos\'))\n\tres.redirect(\'back\')\n})\n```\n\n### Start app\n\n```javascript\n// Start a regular http server.\n// In the browser any form submissions or link clicks will intercepted by @rill/http.\napp.listen({ port: 80 })\n```\n\n## See Also\n\n* [isbrowser](https://github.com/DylanPiercey/isbrowser) - A browserify transform to remove server-side code.\n* [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - Universal http requests using WHATWG fetch.\n* [isomorphic-form-data](https://github.com/form-data/isomorphic-form-data) - Send multipart form data universally (able to send files and works with fetch).\n* [scroll-behavior](https://github.com/DylanPiercey/scroll-behaviour) - @rill/http will automatically try to use the "smooth" [scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) when scrolling to targets on link clicks. This will polyfill that across modernish browsers.\n* [submit-form](https://github.com/DylanPiercey/submit-form) - Manually trigger Rill navigation in the browser.\n\n## Prior Art\n\n* [koa-client](https://github.com/kentjs/koa-client) - Koa clone that runs in the browser, inspired this package.\n* [monorouter](https://github.com/matthewwithanm/monorouter) - Another isomorphic router that partially inspired this package.\n\n## Contributions\n\n* Use `npm test` to run tests.\n\n## License\n\n[MIT](https://tldrlegal.com/license/mit-license)\n';
var markedText = (0, _markdown2.default)(text);

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = ctx.res;

            res.body = (0, _asHtml2.default)(_templateObject, (0, _insertLiveExamples2.default)(markedText, ctx));

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function homeView(_x) {
    return _ref.apply(this, arguments);
  }

  return homeView;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2hvbWUuanMiXSwibmFtZXMiOlsidGV4dCIsIm1hcmtlZFRleHQiLCJjdHgiLCJyZXMiLCJib2R5IiwiaG9tZVZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1d1JBQU47QUFDQSxJQUFNQyxhQUFhLHdCQUFTRCxJQUFULENBQW5COzs7dURBRWUsaUJBQXlCRSxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEMsZUFESyxHQUNHRCxHQURILENBQ0xDLEdBREs7O0FBRWJBLGdCQUFJQyxJQUFKLDBDQUlTLGtDQUFtQkgsVUFBbkIsRUFBK0JDLEdBQS9CLENBSlQ7O0FBRmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7V0FBZUcsUTs7OztTQUFBQSxRIiwiZmlsZSI6InZpZXdzL2hvbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2R5bGFucGllcmNleS9QbGF5Z3JvdW5kL3JpbGwtZG9jcyJ9
