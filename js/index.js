// Startup message.
const STARTUP_MESSAGE = 'Started Server'
console.time(STARTUP_MESSAGE)

// Polyfills
import 'babel-polyfill'
import 'raf/polyfill'
import 'scroll-behaviour/polyfill'

// Libraries
import rill from 'rill'
import ms from 'ms'

// Middleware
import helmet from '@rill/helmet'
import serve from '@rill/static'
import logger from '@rill/logger'
import html from '@rill/html'
import set from '@rill/set'
import redirect from '@rill/redirect'
import loadingScreen from './middleware/loading-screen'

// Subroutes
import wrappers from './wrappers'
import views from './views'

// Create app
export default rill()
  .use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'www.google-analytics.com'],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'rill.site', 'img.shields.io', 'badge-size.herokuapp.com', 'camo.githubusercontent.com', 'www.google-analytics.com', 'stats.g.doubleclick.net'],
      sandbox: ['allow-same-origin', 'allow-scripts']
    }
  }))
  .use(helmet.dnsPrefetchControl())
  .use(helmet.frameguard())
  .use(helmet.hidePoweredBy())
  .use(helmet.hpkp({
    maxAge: ms('90 days'),
    sha256s: ['AbCdEf123=', 'ZyXwVu456=']
  }))
  .use(helmet.hsts({
    maxAge: ms('90 days'),
    includeSubdomains: true,
    force: true
  }))
  .use(helmet.ieNoOpen())
  .use(helmet.noSniff())
  .use(helmet.xssFilter())
  .use(serve('.build/client', { gzip: true, cache: '7 days' }))
  .use(logger())
  .use(html())
  .use(set('title', 'Rill Framework'))
  .use(set('description', 'Universal web application framework.'))
  .use(loadingScreen)
  .use(wrappers)
  .use(views)
  .get(redirect('/'))
  .listen(() => {
    process.send && process.send('online')
    console.timeEnd(STARTUP_MESSAGE)
  })
