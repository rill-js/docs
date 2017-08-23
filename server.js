const ms = require('ms')

global.SECURITY = {
  noSniff: true,
  ieNoOpen: true,
  xssFilter: true,
  frameguard: true,
  hidePoweredBy: true,
  referrerPolicy: true,
  dnsPrefetchControl: true,
  hpkp: {
    maxAge: ms('90 days'),
    sha256s: ['AbCdEf123=', 'ZyXwVu456=']
  },
  hsts: {
    maxAge: ms('90 days'),
    includeSubdomains: true,
    force: true
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", 'raw.githubusercontent.com'],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'www.google-analytics.com'],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'rill.site', 'img.shields.io', 'badge-size.herokuapp.com', 'github.com', 'saucelabs.com', 'camo.githubusercontent.com', 'raw.githubusercontent.com', 'cdn.rawgit.com', 'www.google-analytics.com', 'stats.g.doubleclick.net'],
      sandbox: ['allow-same-origin', 'allow-scripts']
    }
  }
}

// Start secure server.
const app = require('./build').default
require('auto-sni')({
  agreeTos: true,
  email: 'pierceydylan@gmail.com',
  domains: ['www.rill.tech', 'rill.tech', 'www.rill.site', 'rill.site'],
  ports: {
    http: process.env.HTTP_PORT,
    https: process.env.HTTPS_PORT
  }
}, app.emit.bind(app, 'request'))
