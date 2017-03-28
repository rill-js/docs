'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  '/': '<h1 align="center">\n  <!-- Logo -->\n  <a href="https://rill.site" alt="Rill">\n    <img src="https://github.com/rill-js/rill/raw/master/Rill-Logo.jpg" width="300" alt="Rill Logo"/>\n  </a>\n\n  <br/>\n\n  <!-- Stability -->\n  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">\n    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>\n  </a>\n  <!-- Standard -->\n  <a href="https://github.com/feross/standard">\n    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>\n  </a>\n  <!-- NPM version -->\n  <a href="https://npmjs.org/package/rill">\n    <img src="https://img.shields.io/npm/v/rill.svg?style=flat-square" alt="NPM version"/>\n  </a>\n  <!-- Travis build -->\n  <a href="https://travis-ci.org/rill-js/rill">\n  <img src="https://img.shields.io/travis/rill-js/rill.svg?style=flat-square" alt="Build status"/>\n  </a>\n  <!-- Coveralls coverage -->\n  <a href="https://coveralls.io/github/rill-js/rill">\n    <img src="https://img.shields.io/coveralls/rill-js/rill.svg?style=flat-square" alt="Test Coverage"/>\n  </a>\n  <!-- File size -->\n  <a href="https://github.com/rill-js/rill/blob/master/dist/rill.js">\n    <img src="https://badge-size.herokuapp.com/rill-js/rill/master/dist/rill.js?style=flat-square" alt="File size"/>\n  </a>\n  <!-- Downloads -->\n  <a href="https://npmjs.org/package/rill">\n    <img src="https://img.shields.io/npm/dm/rill.svg?style=flat-square" alt="Downloads"/>\n  </a>\n  <!-- Gitter chat -->\n  <a href="https://gitter.im/rill-js/rill">\n    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>\n  </a>\n  <!-- Saucelabs -->\n  <a href="https://saucelabs.com/u/rill-js">\n    <img src="https://saucelabs.com/browser-matrix/rill-js.svg" alt="Sauce Test Status"/>\n  </a>\n</h1>\n\nExpressive HTTP middleware for [nodejs](https://nodejs.org) and the browser.\nRill brings cascading middleware to the browser and enables fully universal web applications.\nIt makes apps enjoyable to write with a simpler top down mental model of your app and free progressive enhancement.\n\nRill provides the minimum for abstractions over [nodejs](https://nodejs.org) and the browser enabling things like routing (with redirecting, refreshes and more), cookies, and middleware with the same api.\n\n# Installation\n\n#### Npm\n```console\nnpm install rill\n```\n\n#### Bower\n```console\nbower install rill\n```\n\n#### [Download](https://raw.githubusercontent.com/rill-js/rill/master/dist/rill.js)\n```html\n<script type="text/javascript" src="rill.js"></script>\n<script>\n    define([\'rill\'], function (rill) {...}) // AMD\n    window.rill // Global rill if no module system in place.\n</script>\n```\n\n# Browser support\nAll modern browsers are supported including IE10+. IE9 is also supported with a [History API polyfill](https://github.com/devote/HTML5-History-API).\n\nOlder browsers will also need to polyfill the Promise API, checkout [es6-promise](https://github.com/stefanpenner/es6-promise) for a good polyfill, babel-polyfill also covers this.\n\n# Community\n\n* [API](https://rill.site/application#docs) documentation.\n* [Examples](https://github.com/rill-js/todomvc)\n* [Middleware](https://github.com/rill-js/rill/wiki) list\n* [Wiki](https://github.com/rill-js/rill/wiki)\n* [Gitter Community](https://gitter.im/rill-js/rill)\n* [Reddit Community](https://www.reddit.com/r/Rill)\n\n# Articles\n\n* [Isomorphic Javascript, let\u2019s make it easier.](https://medium.com/@pierceydylan/isomorphic-javascript-it-just-has-to-work-b9da5b0c8035)\n* [Browsers, Servers, and APIs](https://medium.com/@iamjohnhenry/browsers-servers-and-apis-2f7b10523f39)\n* [Why Everyone is Talking About Isomorphic](https://medium.com/capital-one-developers/why-everyone-is-talking-about-isomorphic-universal-javascript-and-why-it-matters-38c07c87905#.mdd84j28m)\n\n# Why Rill?\nRill is the answer to a simple question; Can I run my [Express](https://github.com/expressjs/express) style router in the browser? Turns out you can and it works awesome.\n\nIt brings a common interface to many typical app like features in both the browser and [nodejs](https://nodejs.org). Many isomorphic frameworks have crazy abstractions and learning curves but with Rill, if you understand [Express](https://github.com/expressjs/express) or [Koa](https://github.com/koajs/koa), you already know how the routing works! In Rill you get to program much of your application logic using the same api (client or server) including routing, rendering, data fetching and more are easily shared.\n\nRill also works perfectly as a stand alone [nodejs](https://nodejs.org) server or a stand alone browser framework. This allows for easy progressive enhancement. If all is well the browser can handle much of your application logic and if JavaScript fails for any reason your server knows exactly what to do.\n\n# How does this thing work?\nIf you look at the source for Rill [here](https://github.com/rill-js/rill/tree/master/src) you will quickly notice there is ZERO browser specific code. This is all thanks to [@rill/http](https://github.com/rill-js/http) which is node\'s [HTTP.createServer](https://nodejs.org/api/http.html#http_http_createserver_requestlistener) ported to the browser.\n\nIn the browser it works by listening for internal link clicks, form submissions and browser history changes. It will then create a [Rill Context](https://rill.site/context#docs) for each of these events and emit it through the router, similar to how receiving a request works in [nodejs](https://nodejs.org).\n\nIt supports everything you\'d expect from a client side [nodejs](https://nodejs.org) server. This includes redirects, refreshes, cookies, scrolling and url updates using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History).\n\n# Example\n\n### Create an app\n\n```javascript\n/**\n * The following code can run 100% in the browser or in nodejs.\n * Examples use es2015/2016 with Babel and JSX but this is optional.\n */\n\nimport rill from \'rill\'\nconst app = rill()\n```\n\n### Setup middleware\n\n```javascript\n// Universal form data parsing middleware.\nimport bodyParser from \'@rill/body\'\napp.use(bodyParser())\n\n// Universal react rendering middleware.\nimport reactRenderer from \'@rill/react\'\napp.use(reactRenderer())\n\n// Example Logger\napp.use(async ({ req }, next)=> {\n\tconst start = new Date\n\n\t// Rill uses promises for control flow.\n\t// ES2016 async functions work great as well!\n\tawait next()\n\n\tconst ms = new Date - start\n\tconsole.log(`${req.method} ${req.url} - ${ms}`)\n})\n```\n\n### Setup a page\n\n```javascript\n// Respond to a GET request.\napp.get(\'/todos\', async ({ res })=> {\n\t// Fetch a todolist from some service.\n\tconst todolist = await MyTodoListService.getAllTodos()\n\n\t// Directly set React virtual dom to the body thanks to @rill/react.\n\t// (Checkout @rill/html for universal html diffing).\n\tres.body = (\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t<title>My App</title>\n\t\t\t\t<meta name="description" content="Rill Application">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<form action="/add-todo" method="POST">\n\t\t\t\t\t<h1>Just a plain old form</h1>\n\t\t\t\t\t<input type="text" name="todo"/>\n\t\t\t\t\t<button type="submit">Add Todo</button>\n\t\t\t\t</form>\n\n\t\t\t\t{todolist.length\n\t\t\t\t\t? todolist.map(renderTodo)\n\t\t\t\t\t: \'No todos to display.\'\n\t\t\t\t}\n\t\t\t\t<script src="/app.js"/>\n\t\t\t</body>\n\t\t</html>\n\t)\n})\n```\n\n### Handle a form submission\n```javascript\n// Respond to a POST request.\napp.post(\'/add-todo\', async ({ req, res })=> {\n\t// We handle form submissions with Rill the same way one would with any other node framework.\n\t// Here we are simply adding the todo via some service.\n\tawait MyTodoListService.addTodo({ text: req.body.todo })\n\t// And then we redirect back (same as res.redirect(\'/todos\'))\n\tres.redirect(\'back\')\n})\n```\n\n### Start app\n\n```javascript\n// Start a regular http server.\n// In the browser any form submissions or link clicks will intercepted by @rill/http.\napp.listen({ port: 80 })\n```\n\n## See Also\n\n* [isbrowser](https://github.com/DylanPiercey/isbrowser) - A browserify transform to remove server-side code.\n* [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - Universal http requests using WHATWG fetch.\n* [isomorphic-form-data](https://github.com/form-data/isomorphic-form-data) - Send multipart form data universally (able to send files and works with fetch).\n* [scroll-behavior](https://github.com/DylanPiercey/scroll-behaviour) - @rill/http will automatically try to use the "smooth" [scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) when scrolling to targets on link clicks. This will polyfill that across modernish browsers.\n* [submit-form](https://github.com/DylanPiercey/submit-form) - Manually trigger Rill navigation in the browser.\n\n## Prior Art\n\n* [koa-client](https://github.com/kentjs/koa-client) - Koa clone that runs in the browser, inspired this package.\n* [monorouter](https://github.com/matthewwithanm/monorouter) - Another isomorphic router that partially inspired this package.\n\n## Contributions\n\n* Use `npm test` to run tests.\n\n## License\n\n[MIT](https://tldrlegal.com/license/mit-license)\n',
  '/app': '# Introduction\n\n  Rill is supported in all recent versions of [nodejs](https://nodejs.org) and modern browsers including IE10.\n  It allows you to create an isomorphic/universal web application that will share the majority of your apps code between the client and the server.\n  This means quick page loads with server side rendering and a blazing fast client side experience with JavaScript enhancement.\n\n# Application\n\n  A Rill application is an object containing an array of middleware functions\n  which are composed and executed in a stack-like manner upon request.\n  Rill is similar to other [nodejs](https://nodejs.org) frameworks such as\n  [Express](https://github.com/expressjs/express), [Hapi](https://github.com/hapijs/hapi)\n  and [Koa](https://github.com/koajs/koa) with one important distinction;\n  It can run in the browser.\n\n  Rill comes with many essential utilities for building modern web applications.\n  This includes: Routing, redirection, cookies, and more. Typically a universal\n  rendering solution will also be used such as [@rill/react](https://github.com/rill-js/react)\n  or [@rill/html](https://github.com/rill-js/html) which allow full page\n  applications to work seamlessly on the server and in the browser.\n\n```js\n// Modules\nimport Rill from \'rill\'\n\n// CommonJS\nconst Rill = require(\'rill\')\n\n// Creating an application (new optional).\nconst app = new Rill()\n```\n\n## app.listen({ port, host, backlog, tls }, callback)\n\n  A Rill application is not a 1-to-1 representation of a HTTP server.\n  One or more Rill applications may be mounted together to form larger\n  applications and you can even listen to multiple ports with a single HTTP server.\n\n  All arguments to `listen` are optional and will work similarly to the native [http#listen](https://nodejs.org/api/http.html#http_server_listen_handle_callback).\n\n  `listen` will start an HTTPS server if the `tls` option is provided.\n  The tls options are the same as nodes [TLS](https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener) module.\n\n  The `ip`, `port` and `backlog` options are forwarded to `Server#listen()`. These are simply ignored in the browser.\n\n  The following is a useless Rill application bound to port `3000`:\n\n```js\napp.listen({ port: 3000 })\n```\n\n  Or we can start a HTTPS server with the same API.\n\n```js\nvar options = {\n  key: fs.readFileSync(\'test/fixtures/keys/agent2-key.pem\'),\n  cert: fs.readFileSync(\'test/fixtures/keys/agent2-cert.pem\')\n}\n\napp.listen({ port: 8000, tls: options })\n```\n\n## app.handler()\n\n  Return a callback function suitable for the `http.createServer()`\n  method to handle a request.\n  You may also use this callback function to mount your rill app in a\n  Connect/Express app.\n\n  This means you can spin up the same application as both HTTP and HTTPS\n  or on multiple addresses:\n\n```js\n// For universal use you can use @rill/http(s) instead of nodes http module.\nhttp.createServer(app.handler()).listen(3000)\nhttp.createServer(app.handler()).listen(3001)\n```\n\n## app.stack\n\n  The current middleware stack for the application as an array.\n\n## app.setup(function...)\n\n  Simple syntactic sugar for middleware that wish do more than just add to the stack.\n  This is useful for modifying/extending Rill and for other complex plugins.\n\n```js\napp.setup((myapp)=> {\n  myapp === app // myapp is just a reference to the existing app.\n  myapp.customMethod = ... // Set custom methods on the rill instance.\n  myapp.use(customMiddleware) // Setup extra middleware/routes/etc.\n})\n```\n\n## app.use(function|application...)\n\n  Add the given middleware function to this application.\n  See [Middleware](https://github.com/rill-js/rill/wiki#middleware) for more information.\n  In Rill you can also mount other applications.\n\n```js\n// Simple logging middleware.\napp.use(async ({ req, res }, next)=> {\n  const start = new Date\n\n  // Rill uses promises for control flow.\n  // ES2016 async functions work great as well!\n  await next()\n\n  const ms = new Date - start\n  console.log(`${req.method} ${req.url} - ${ms}`)\n})\n```\n\n## app.at(function|application...)\n\n  Add a middleware that will only be ran if a path string is matched.\n  Rill uses the same path matching library as Express and some other node frameworks. You can test out your own path regular expressions [here](http://forbeslindesay.github.io/express-route-tester/).\n\n```js\n// Match request for the route path.\napp.at(\'/\', ...)\n\n// Params will also be provided under req.params\n// For example using /api/user\napp.at(\'/api/:resource\', ({ req })=>\n  req.params.resource === \'user\'\n)\n```\n\n## app|METHOD|([path], function|application...)`\n\n  Add a middleware that will only be ran if an optional path string is matched\n  and the request has the used method.\n\n```js\n// Match all get requests.\napp.get(...)\n\n// Match request for the route path and uses the GET method.\napp.get(\'/\', ...)\n\n// Even mount routers for a more modular experience.\napp.get(\'/api/*\',\n  rill().get(\'/v1\', ...) // matches `/api/v1`\n)\n```\n\n## app.host(hostname, function|application...)\n\n  Adds middleware that will only be ran if a hostname is matched. The hostname may use the same regular expression strings used in the other routing methods. You can test out your own hostname regular expressions [here](http://forbeslindesay.github.io/express-route-tester/).\n\n```js\n// Match request for a specific host.\napp.host(\'test.com\', ...)\n\n// Subdomain matches will also be provided under req.subdomains\n// For example using api.user.test.com\napp.host(\'api.:resource.test.com\', { req })=>\n  res.subdomains.resource === \'user\'\n  res.subdomains == [\'api\', \'user\']\n)\n```\n\n## Error Handling\n\n  Rill defers error handling to the promises used within Rill middleware.\n  In rill the `next` middleware will always return a promise.\n\n```js\n// async functions not required.\napp.use(async (ctx, next)=> {\n  try {\n    await next()\n  } catch (error) {\n    // Catch errors later on in the stack.\n    log.error(\'server error\', err)\n  }\n})\n```\n',
  '/context': '# Context\n\n  A Rill Context encapsulates node\'s `request` and `response` objects\n  into a single object which provides helpful methods for writing\n  web applications and APIs.\n\n  A `Context` is created _per_ request, and is provided to middleware\n  as the first argument. In an es2015 capable environment it is easy to pull\n  out parts of the context that you need (as seen in some examples) like so\n  `{ req, res, locals }`.\n\n```js\napp.use((ctx)=> {\n  ctx.req // is a Rill request.\n  ctx.res // is a Rill response.\n  ctx.locals // a place to store local variables.\n})\n```\n\n## API\n\n  `Context` specific methods and accessors.\n\n### ctx.req\n\n  A Rill `Request` object.\n\n### ctx.res\n\n  A Rill `Response` object.\n\n### ctx.locals\n\n  An object created during each incoming request that allows passing data between each middleware function.\n\n### ctx.fail(status, [message], [properties])\n\n  Helper method to throw an error with a `.status` property.\n\n```js\nctx.fail(403)\nctx.fail(400, \'name required\')\n```\n\n  For example `ctx.fail(400, \'name required\')` is equivalent to:\n\n```js\nconst err = new Error(\'name required\')\nerr.status = 400\nthrow err\n```\n\n  You may optionally pass a `properties` object which is merged into the error as-is,\n  useful for decorating machine-friendly errors which are reported to the requester upstream.\n\n```js\nctx.fail(401, \'access_denied\', { user: user })\n```\n\nRill uses [@rill/error](https://github.com/rill-js/error) to create errors.\n\n### ctx.assert(value, status, [msg], [properties])\n\n  Helper method to throw an error similar to `.fail()`\n  when `!value`. Similar to node\'s [assert()](http://nodejs.org/api/assert.html)\n  method.\n\n```js\nctx.assert(ctx.state.user, 401, \'User not found. Please login!\')\n```\n',
  '/request': '# Request\n\n  A Rill `Request` object is an abstraction on top of node\'s vanilla request object, or [@rill/http](https://github.com/rill-js/http) in the browser.\n  It provides additional functionality that is useful for every day development.\n\n## API\n\n### req.original\n\n Original nodejs/[@rill/http](https://github.com/rill-js/http) request object.\n\n### req.ctx\n\n The current [context](https://rill.site/context#docs).\n\n### req.headers\n\n Original request header object.\n\n```js\nctx.req.headers // => { ... }\n```\n\n### req.cookies\n\n Parsed cookies for the request.\n\n```js\nctx.req.cookies // => { ... }\n```\n\n### req.method\n\n Request method.\n\n ```js\nctx.req.method // => GET\n```\n\n### req.href\n\n  Get full request URL, include `protocol`, `host` and `url`.\n\n```js\nctx.req.href // => http://www.example.com/foo/bar?q=1#section\n```\n\n### req.origin\n\n  Get the origin of the request (protocol, hostname and port).\n\n```js\nctx.req.origin // => http://www.example.com\n```\n\n### req.protocol\n\n Protocol for the request.\n\n```js\nctx.req.protocol // => http\n```\n\n### req.hostname\n\n Host name for the request.\n Use `ctx.req.matchHost` for the hostname being matched in a mounted app.\n\n```js\nctx.req.hostname // => www.example.com\nctx.req.matchHost // => www.example.com\n```\n\n### req.port\n\n Port number for the request.\n\n```js\nctx.req.port // => 80\n```\n\n### req.host\n\n Host for the request, including port.\n\n```js\nctx.req.host // => www.example.com:80\n```\n\n### req.pathname\n\n The path section of the URL.\n Use `ctx.req.matchPath` for the pathname being matched in a mounted app.\n\n```js\nctx.req.pathname // => /foo/bar\nctx.req.matchPath // => /foo/bar\n```\n\n### req.path\n\n The concatenated pathname and querystring of the URL.\n\n```js\nctx.req.path // => /foo/bar?q=1\n```\n\n### req.search\n\n  Get raw query string including `?`.\n\n```js\nctx.req.search // => \'?q=1\'\n```\n\n### req.query\n\n A parsed querstring object.\n\n ```js\nctx.req.query // => { q: \'1\' }\n```\n\n### req.hash\n\n The hash fragment of the URL including the pound-sign (only in browser).\n\n```js\nctx.req.hash // => \'#section\'\n```\n\n### req.params\n\n An object containing the matches during a path middleware.\n\n```js\nctx.req.params // => {}\n```\n\n### req.secure\n\n  Shorthand for `ctx.req.protocol === \'https\'` to check if a request was\n  issued via TLS.\n\n```js\nctx.req.secure // => false\n```\n\n### req.ip\n\n  Request remote address. Supports `X-Forwarded-For`.\n\n```js\nctx.req.ip // => \'127.0.0.1\'\n```\n\n### req.subdomains\n\n  Return subdomains as an array.\n\n  Subdomains are the dot-separated parts of the host before the main domain of\n  the app. By default, the domain of the app is assumed to be the last two\n  parts of the host.\n\n```js\nctx.req.subdomains // => [\'www\']\n```\n\n### req.get(field)\n\n  Return specific request header (case insensitive).\n\n```js\nctx.req.get(\'Cookie\') // => \'...\'\n```\n',
  '/response': '# Response\n\n  A Rill `Response` object is an abstraction on top of node\'s vanilla response object, or [@rill/http](https://github.com/rill-js/http) in the browser.\n  It provides additional functionality that is useful for every day development.\n\n## API\n\n### res.original\n\n Original nodejs/[@rill/http](https://github.com/rill-js/http) response object.\n\n### res.ctx\n\n The current [context](https://rill.site/context#docs).\n\n### res.headers\n\n  Original response header object.\n\n```js\nctx.res.headers // => { ... }\n```\n\n### res.status\n\n  Get response status. By default, `ctx.res.status` is `404` unlike node\'s `res.statusCode` which defaults to `200`.\n\n```js\nctx.res.status // => 200\n```\n\n### res.status=\n\n  Set response status via numeric code:\n\n  - 100 \'continue\'\n  - 101 \'switching protocols\'\n  - 102 \'processing\'\n  - 200 \'ok\'\n  - 201 \'created\'\n  - 202 \'accepted\'\n  - 203 \'non-authoritative information\'\n  - 204 \'no content\'\n  - 205 \'reset content\'\n  - 206 \'partial content\'\n  - 207 \'multi-status\'\n  - 300 \'multiple choices\'\n  - 301 \'moved permanently\'\n  - 302 \'moved temporarily\'\n  - 303 \'see other\'\n  - 304 \'not modified\'\n  - 305 \'use proxy\'\n  - 307 \'temporary redirect\'\n  - 400 \'bad request\'\n  - 401 \'unauthorized\'\n  - 402 \'payment required\'\n  - 403 \'forbidden\'\n  - 404 \'not found\'\n  - 405 \'method not allowed\'\n  - 406 \'not acceptable\'\n  - 407 \'proxy authentication required\'\n  - 408 \'request time-out\'\n  - 409 \'conflict\'\n  - 410 \'gone\'\n  - 411 \'length required\'\n  - 412 \'precondition failed\'\n  - 413 \'request entity too large\'\n  - 414 \'request-uri too large\'\n  - 415 \'unsupported media type\'\n  - 416 \'requested range not satisfiable\'\n  - 417 \'expectation failed\'\n  - 418 \'i\'m a teapot\'\n  - 422 \'unprocessable entity\'\n  - 423 \'locked\'\n  - 424 \'failed dependency\'\n  - 425 \'unordered collection\'\n  - 426 \'upgrade required\'\n  - 428 \'precondition required\'\n  - 429 \'too many requests\'\n  - 431 \'request header fields too large\'\n  - 500 \'internal server error\'\n  - 501 \'not implemented\'\n  - 502 \'bad gateway\'\n  - 503 \'service unavailable\'\n  - 504 \'gateway time-out\'\n  - 505 \'http version not supported\'\n  - 506 \'variant also negotiates\'\n  - 507 \'insufficient storage\'\n  - 509 \'bandwidth limit exceeded\'\n  - 510 \'not extended\'\n  - 511 \'network authentication required\'\n\n### res.message\n\n  Get response status message. By default, `res.message` is\n  associated with `res.status`.\n\n```js\nctx.res.message // => \'success\'\n```\n\n### res.message=\n\n  Set response status message to the given value.\n\n### res.respond=\n\n  Set `res.respond = false` to skip the automatic response built into Rill.\n\n### res.end=\n\n  Set `res.end = false` to only send response headers, but not end the request.\n\n### res.body\n\n  Get response body.\n\n```js\nctx.res.body // => \'<div>hello world</div>\'\n```\n\n### res.body=\n\n  Set response body to one of the following:\n\n  - `String` written (sets text/html or text/plain automatically)\n  - `Buffer` written\n  - `Stream` piped\n  - `Object` json-stringified\n  - `null` no content response\n\nIf `res.status` has not been set, Rill will automatically set the status to `200` or `204`.\n\n#### String\n\n  The Content-Type is defaulted to text/html or text/plain, both with\n  a default charset of utf-8. The Content-Length field is also set.\n\n#### Buffer\n\n  The Content-Type is defaulted to application/octet-stream, and Content-Length\n  is also set.\n\n#### Stream\n\n  The Content-Type will be inferred from the file name and is defaulted to application/octet-stream.\n\n#### Object\n\n  The Content-Type is defaulted to application/json.\n\n### res.get(field)\n\n  Get a response header field value with case-insensitive `field`.\n\n```js\nconst etag = res.get(\'ETag\')\n```\n\n### res.set(field, value)\n\n  Set response header `field` to `value`:\n\n```js\nres.set(\'Cache-Control\', \'no-cache\')\n```\n\n### res.append(field, value)\n  Append additional header `field` with value `val`.\n\n```js\nres.append(\'Link\', \'<http://127.0.0.1/>\')\n```\n\n### res.remove(field)\n\n  Remove header `field`.\n\n### res.cookie(key, value, [options])\n\n  Appends a new cookie header.\n\n```js\nres.cookie(\'a\', 1, { httpOnly: true })\n```\n\n### res.clearCookie(key)\n\n  Expires an existing cookie.\n\n```js\nres.clearCookie(\'a\')\n```\n\n### res.redirect(url, [alt])\n\n  Perform a [302] redirect to `url`.\n\n  The string \'back\' is special-cased\n  to provide Referrer support, when Referrer\n  is not present `alt` or `ctx.req.href` is used.\n\n```js\nres.redirect(\'back\')\nres.redirect(\'back\', \'/index.html\')\nres.redirect(\'/login\')\nres.redirect(\'http://google.com\')\n```\n\n  To alter the default status of `302`, simply assign the status\n  before or after this call. To alter the body, assign it after this call:\n\n```js\nres.status = 301\nres.redirect(\'/cart\')\nres.body = \'Redirecting to shopping cart\'\n```\n\n### res.refresh(delay, [url], [alt])\n\n  Sets the \'Refresh\' header causing the browser to redirect the user after `delay` seconds. Using \'back\' as a url will work the same as `res.redirect(\'back\')`.\n\n```js\n// Refresh the browser after 1 second.\nres.refresh(1)\n\n// Refresh the browser after 2 seconds and go to the login page.\nres.refresh(2, \'/login\')\n```\n'
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiLHF4U0FEYTtBQUViLCtqTUFGYTtBQUdiLHV5REFIYTtBQUliLGk5RkFKYTtBQUtiO0FBTGEsQyIsImZpbGUiOiJkb2NzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9keWxhbi9EZXZlbG9wbWVudC9mdW4vcmlsbC1kb2NzIn0=
