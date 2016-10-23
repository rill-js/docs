import rill from 'rill'
import pageWrapper from './page'

export default rill()
  .get('/*', pageWrapper)
