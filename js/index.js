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
import serve from '@rill/static'
import logger from '@rill/logger'
import html from '@rill/html'

// Subroutes
import middleware from './middleware'
import wrappers from './wrappers'
import views from './views'

// Create app
export default rill()
  .use(serve('.build/client', { gzip: true, cache: '7 days' }))
  .use(logger())
  .use(html())
  .setup(middleware)
  .setup(wrappers)
  .setup(views)
  .listen(() => {
    process.send && process.send('online')
    console.timeEnd(STARTUP_MESSAGE)
  })
