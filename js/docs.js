import fs from 'fs'
import path from 'path'

export default {
  '/': fs.readFileSync(path.join(path.join(__dirname, '../node_modules/rill/docs/api/'), 'index.md'), 'utf8'),
  '/context': fs.readFileSync(path.join(path.join(__dirname, '../node_modules/rill/docs/api/'), 'context.md'), 'utf8'),
  '/request': fs.readFileSync(path.join(path.join(__dirname, '../node_modules/rill/docs/api/'), 'request.md'), 'utf8'),
  '/response': fs.readFileSync(path.join(path.join(__dirname, '../node_modules/rill/docs/api/'), 'response.md'), 'utf8')
}
