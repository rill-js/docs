import 'isomorphic-fetch'
import ms from 'ms'
import router from 'rill'
import helmet from '@rill/helmet'
import fresh from '@rill/fresh'
import etag from '@rill/etag'
import compress from '@rill/compress'
import serve from '@rill/static'
import progress from '@rill/progress'
import logger from '@rill/logger'
import expose from '@rill/expose'
import fetcher from '@rill/fetcher'
import session from '@rill/session'
import loader from '@rill/loader'
import body from '@rill/body'
import unhandled from '@rill/unhandled'
import redirect from '@rill/redirect'
import views from './views'

const message = 'App Started'
console.time(message)

export default router()
  .use(helmet(global.SECURITY))
  .use(body())
  .use(session())
  .use(loader())
  .use(logger())
  .use(fresh())
  .use(etag())
  .use(compress())
  .get(serve('build/public', { gzip: true, cache: `${ms('30 days')}; immutable` }))
  .use(progress({ spinner: false, color: '#009fe2' }))
  .use(fetcher())
  .use(expose())
  .get(views)
  .get(unhandled(redirect('/')))
  .listen(() => {
    console.timeEnd(message)
    console.log('')
  })
