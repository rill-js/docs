// Startup message.
const STARTUP_MESSAGE = 'Started Server'
console.time(STARTUP_MESSAGE)

// Polyfills
import 'babel-polyfill'
import 'raf/polyfill'
import 'scroll-behaviour/polyfill'

// Libraries
import rill from 'rill'

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
  .use(helmet())
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
