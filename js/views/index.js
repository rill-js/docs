import redirect from '@rill/redirect'
import set from '@rill/set'
import home from './home'
import docs from './docs'

export default router => {
  router
    .use(set('title', 'Rill Framework'))
    .use(set('description', 'Universal web application framework.'))
    .setup(home)
    .setup(docs)
    .get('/*', redirect('/'))
}
