import rill from 'rill'
import homeView from './home'
import applicationView from './docs/application'
import contextView from './docs/context'
import requestView from './docs/request'
import responseView from './docs/response'

export default rill()
  .get('/', homeView)
  .get('/application', applicationView)
  .get('/context', contextView)
  .get('/request', requestView)
  .get('/response', responseView)
