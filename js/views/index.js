import redirect from '@rill/redirect'
import set from '@rill/set'
import home from './home'

export default (app) => {
  app
    .use(set('title', 'Rill'))
    .use(set('description', 'Isomorphic web application framework.'))
    .setup(home)
    .get('/*', redirect('/'))
}
