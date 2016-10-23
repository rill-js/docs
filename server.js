const env = process.env
const IS_DEV = env.NODE_ENV == null
env.HTTP_PORT = env.HTTP_PORT || 3002
env.HTTPS_PORT = env.HTTPS_PORT || 3003

if (IS_DEV) {
  // Setup sourcemaps.
  require('source-map-support').install({ hookRequire: true })
  // Handle uncaught exceptions.
  const PrettyError = require('pretty-error')
  const pe = new PrettyError()
    .skipNodeFiles()
    .skipPackage('rill')
    .skipPackage('@rill')
    .skipPackage('regenerator-runtime')
  process.once('uncaughtException', (err) => {
    console.log(pe.render(err))
    process.send && process.send('error')
  })

  // Override console.error for prettier messages.
  const originalError = console.error
  console.error = (err) => {
    originalError.call(console, pe.render(err))
  }
}

// Expose server.
const app = require('./.build/server').default
module.exports = (IS_DEV
  ? require('http').createServer().listen(env.HTTP_PORT)
  : require('auto-sni')({
    email: 'pierceydylan@gmail.com',
    agreeTos: true,
    debug: env.NODE_ENV !== 'production',
    domains: [['www.rill.tech', 'rill.tech'], ['www.rill.site', 'rill.site']],
    ports: {
      http: env.HTTP_PORT,
      https: env.HTTPS_PORT
    }
  })
).on('request', app.emit.bind(app, 'request'))
