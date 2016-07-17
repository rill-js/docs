var gulp = require('gulp')
var plumber = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')
var when = require('gulp-if')
var gzip = require('gulp-gzip')
var notifier = require('node-notifier')
var PrettyError = require('pretty-error')
var browserSync = require('browser-sync').create()

// Misc constants.
var PATHS = {
  IN: __dirname,
  RUN: __dirname + '/bin/server/app',
  CLIENT: __dirname + '/bin/client',
  SERVER: __dirname + '/bin/server'
}
var UGLIFY_CONFIG = {
  mangle: true,
  compress: {
    unused: true,
    sequences: true,
    properties: true,
    dead_code: true,
    conditionals: true,
    comparisons: true,
    evaluate: true,
    booleans: true,
    loops: true,
    if_return: true,
    join_vars: true,
    cascade: true,
    drop_console: true,
    screw_ie8: true
  }
}
var IMAGEMIN_CONFIG = {
  optimizationLevel: 7,
  progressive: true,
  interlaced: true,
  multipass: true,
  svgoPlugins: [
    { removeViewBox: true },
    { removeUselessStrokeAndFill: true },
    { removeEmptyAttrs: true }
  ]
}
var GZIP_CONFIG = {
  gzipOptions: { level: 9, memLevel: 9 },
  append: true
}

/**
 * Start dev server and initialize browser sync.
 */
gulp.task('watch', function (cb) {
  var fork = require('child_process').fork
  var p = null
  cb = finishOnce(cb)
  start(function noop () {})

  // Start browser sync.
  browserSync.init({
    proxy: 'localhost:3002',
    notify: false,
    open: false
  })

  // Watch js and build client/server then reload browser.
  gulp.watch(PATHS.IN + '/js/**/*.js', gulp.series(
    gulp.parallel('build:server', 'build:js'),
    start,
    'reload:browser'
  ))

  // Watch css and build assets and css then reload browser.
  gulp.watch(PATHS.IN + '/css/**/*.css', gulp.series(
    'build:assets',
    'build:css',
    'reload:browser'
  ))

  // Ensure childprocess dies on exit.
  process.once('SIGINT', handleExit.bind(null, true))
  process.once('uncaughtException', handleExit.bind(null, true))
  process.once('exit', handleExit.bind(null, false))

  /**
   * Starts or restarts the node server.
   */
  function start (task) {
    var restart = start.bind(null, task)
    var finish = finishOnce(task)
    if (p) p.kill()
    p = fork(PATHS.RUN)
      .on('exit', finish)
      .on('message', function (m) { if (m === 'online') finish(); })
  }

  /**
   * Handle process exit (cleans up running server).
   */
  function handleExit (exit) {
    cb()
    p && p.kill()
    exit && process.exit()
  }

  /**
   * Only finish a gulp task if it hasn't been finished before.
   */
  function finishOnce (task) {
    return function () {
      if (task.done) return
      task.done = true
      task()
    }
  }
})

/**
 * Build server side js.
 */
gulp.task('build:server', function () {
  var babel = require('gulp-babel')
  var head = require('gulp-header')
  var changed = require('gulp-changed')
  var env = process.env.NODE_ENV

  return gulp.src(PATHS.IN + '/js/**/*.js')
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(when(!env, changed(PATHS.SERVER)))
    .pipe(when(!env, sourcemaps.init()))
    .pipe(babel())
    .pipe(head("require('source-map-support/register');\n"))
    .pipe(when(!env, sourcemaps.write({ sourceRoot: PATHS.IN, includeContent: false })))
    .pipe(gulp.dest(PATHS.SERVER))
})

/**
 * Build client side js.
 */
gulp.task('build:js', function () {
  var env = process.env.NODE_ENV
  var uglify = require('gulp-uglify')
  var browserify = require('gulp-bro')

  return gulp.src(PATHS.IN + '/js/app.js', { read: false })
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(browserify({
      fullPaths: !env,
      debug: true,
      error: 'emit'
    }))
    .pipe(when(!env, sourcemaps.init({ loadMaps: true })))
    .pipe(when(!env, sourcemaps.write('.')))
    .pipe(when(env === 'production', uglify(UGLIFY_CONFIG)))
    .pipe(gulp.dest(PATHS.CLIENT + '/js'))
    .pipe(when(env === 'production', gzip(GZIP_CONFIG)))
    .pipe(when(env === 'production', gulp.dest(PATHS.CLIENT + '/js')))
})

/**
 * Build and compress css.
 */
gulp.task('build:css', function () {
  var cssmin = require('cssnano')
  var cached = require('gulp-cached')
  var remember = require('gulp-remember')
  var concat = require('gulp-concat')
  var postcss = require('gulp-postcss')
  var postcssUrl = require('postcss-url')
  var postcssMediaQueries = require('css-mqpacker')
  var env = process.env.NODE_ENV

  return gulp.src(PATHS.IN + '/css/*.css')
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(when(!env, sourcemaps.init()))
    .pipe(when(!env, cached('css')))
    .pipe(when(!env, remember('css')))
    .pipe(concat('app.css'))
    .pipe(postcss([
      postcssUrl({ url: 'inline', basePath: PATHS.CLIENT }),
      postcssMediaQueries(),
      cssmin()
    ]))
    .pipe(when(!env, sourcemaps.write('.')))
    .pipe(gulp.dest(PATHS.CLIENT + '/css'))
    .pipe(when(env === 'production', gzip(GZIP_CONFIG)))
    .pipe(when(env === 'production', gulp.dest(PATHS.CLIENT + '/css')))
    .pipe(when(!env, browserSync.stream()))
})

/**
 * Builds static files.
 */
gulp.task('build:assets', function () {
  var newer = require('gulp-newer')
  var imagemin = require('gulp-imagemin')
  var env = process.env.NODE_ENV

  return gulp.src(PATHS.IN + '/assets/**/*')
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(when(!env, newer(PATHS.CLIENT)))
    .pipe(when(env === 'production', imagemin(IMAGEMIN_CONFIG)))
    .pipe(gulp.dest(PATHS.CLIENT))
})

/**
 * Turns browsersync reload into a gulp task.
 */
gulp.task('reload:browser', function (cb) {
  browserSync.reload()
  cb()
})

/**
 * Cleans up uneeeded files.
 */
gulp.task('clean', function (cb) {
  var del = require('del')
  if (!process.env.NODE_ENV) return del(PATHS.CLIENT + '/**/*.gz', cb)
  else return del(PATHS.CLIENT + '/**/*.map', cb)
})

/**
 * Run all build scripts.
 */
gulp.task('build', gulp.series(
  gulp.parallel('clean', 'build:assets'),
  gulp.parallel('build:server', 'build:js', 'build:css')
))

/**
 * Run all build scripts as production.
 */
gulp.task('production:set', function (cb) { process.env.NODE_ENV = 'production'; cb(); })
gulp.task('production:build', gulp.parallel('production:set', 'build'))

// Watch by default.
gulp.task('default', gulp.series('watch'))

/**
 * Print gulp errors and allow the stream to end gracefully.
 */
function handleError (err) {
  console.log(new PrettyError()
    .skipPackage('babylon')
    .render(err)
  )

  notifier.notify({
    title: err.name,
    message: err.message
  })

  this.emit('end')
}
