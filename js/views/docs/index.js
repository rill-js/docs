import application from './application'
import context from './context'
import request from './request'
import response from './response'

export default router => {
  router
    .setup(application)
    .setup(context)
    .setup(request)
    .setup(response)

}
