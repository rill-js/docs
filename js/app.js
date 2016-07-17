const STARTUP_MESSAGE = 'Started Server'

// Polyfills
import 'babel-polyfill'

// Libraries
import rill from 'rill'

// Middleware
import serve from '@rill/static'
import logger from '@rill/logger'
import progress from '@rill/progress'
import session from '@rill/session'
import stats from '@rill/stats'
import html from '@rill/html'
import wrappers from './wrappers'

// Subroutes
import middleware from './middleware'
import views from './views'

console.time(STARTUP_MESSAGE)
// Create app
rill()
  .use(serve('bin/client', { gzip: true, cache: 6.048e8 }))
  .use(logger())
  .use(progress())
  .use(session())
  .use(stats())
  .use(html())
  .setup(middleware)
  .setup(wrappers)
  .setup(views)
  .listen({ port: 3002 }, ()=> {
    process.send && process.send('online')
    console.timeEnd(STARTUP_MESSAGE)
  })
