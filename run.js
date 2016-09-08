const env = process.env
env.HTTP_PORT = env.HTTP_PORT || 3002
env.HTTPS_PORT = env.HTTPS_PORT || 3003
env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const IS_DEV = env.NODE_ENV == null
const app = require('./.build/server').default

// Handle uncaught exceptions in dev mode.
if (IS_DEV) {
  const PrettyError = require('pretty-error')
  const pe = new PrettyError()
    .skipPackage('babylon')
    .skipNodeFiles()
  process.once('uncaughtException', (err) => console.log(pe.render(err)))
}

// Expose server.
module.exports = (IS_DEV
  ? require('http').createServer().listen(env.HTTP_PORT)
  : require('auto-sni')({
    email: 'pierceydylan@gmail.com',
    agreeTos: true,
    debug: env.NODE_ENV !== 'production',
    domains: ['rill.io'],
    ports: {
      http: env.HTTP_PORT,
      https: env.HTTPS_PORT
    }
  })
).on('request', app.emit.bind(app, 'request'))
