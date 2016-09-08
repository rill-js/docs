'use strict'

const path = require('path')
const gulp = require('gulp')
const util = require('gulp-util')
const gzip = require('gulp-gzip')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const PrettyError = require('pretty-error')
const pe = new PrettyError()
  .skipPackage('babylon')
  .skipNodeFiles()

// Misc constants.
const IS_DEV = !process.env.NODE_ENV
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const PATHS = {
  IN: __dirname,
  RUN: path.join(__dirname, '/run'),
  CLIENT: path.join(__dirname, '/.build/client'),
  SERVER: path.join(__dirname, '/.build/server')
}

/**
 * Start dev server and initialize browser sync.
 */
gulp.task('watch', done => {
  const cp = require('child_process')
  let p = null
  done = finishOnce(done)
  start(() => {
  })

  // Start browser sync.
  global.BS = require('browser-sync').create()
  global.BS.init({ proxy: 'localhost:3002', notify: false, open: false })

  // Watch app js build client/server then reload browser.
  gulp.watch(path.join(PATHS.IN, '/js/**/*.js'), gulp.series(
    gulp.parallel(gulp.series('build:server', start), 'build:client'),
    'reload:browser'
  ))

  // Watch css and build css then reload browser.
  gulp.watch(path.join(PATHS.IN, '/css/**/*.css'), gulp.series('build:css'))

  // Ensure childprocess dies on exit.
  process.once('SIGINT', handleExit.bind(null, true))
  process.once('uncaughtException', handleExit.bind(null, true))
  process.once('exit', handleExit.bind(null, false))

  /**
   * Starts or restarts the node server.
   */
  function start (task) {
    const finish = finishOnce(task)
    if (p) p.kill()
    p = cp.fork(PATHS.RUN)
      .on('exit', finish)
      .on('error', finish)
      .on('message', message => { if (message === 'online') finish() })
  }

  /**
   * Handle process exit (cleans up running server).
   */
  function handleExit (exit) {
    done()
    p && p.kill()
    exit && process.exit()
  }

  /**
   * Only finish a gulp task if it hasn't been finished before.
   */
  function finishOnce (task) {
    return () => {
      if (!task.done) {
        task.done = true
        task()
      }
    }
  }
})

/**
 * Build server side js.
 */
gulp.task('build:server', () => {
  const babel = require('gulp-babel')
  const head = require('gulp-header')
  return gulp.src(path.join(PATHS.IN, '/js/**/*.js'))
    .pipe(plumber({ errorHandler }))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(head("require('source-map-support/register');"))
    .pipe(sourcemaps.write({ sourceRoot: PATHS.IN, includeContent: false }))
    .pipe(gulp.dest(PATHS.SERVER))
})

/**
 * Build client side js.
 */
gulp.task('build:client', () => {
  const browserify = require('gulp-bro')
  const uglify = require('gulp-uglify')
  return gulp.src(path.join(PATHS.IN, '/js/index.js'), { read: false })
    .pipe(plumber({ errorHandler }))
    .pipe(browserify({
      fullPaths: IS_DEV,
      debug: true,
      error: 'emit'
    }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(IS_PRODUCTION ? uglify() : util.noop())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.CLIENT))
    .pipe(IS_PRODUCTION ? gzip() : util.noop())
    .pipe(IS_PRODUCTION ? gulp.dest(PATHS.CLIENT) : util.noop())
})

/**
 * Build and compress css.
 */
gulp.task('build:css', function () {
  var cssmin = require('cssnano')
  var concat = require('gulp-concat')
  var postcss = require('gulp-postcss')

  return gulp.src(PATHS.IN + '/css/*.css')
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(sourcemaps.init())
    .pipe(concat('index.css'))
    .pipe(postcss([cssmin()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.CLIENT))
    .pipe(IS_PRODUCTION ? gzip() : util.noop())
    .pipe(IS_PRODUCTION ? gulp.dest(PATHS.CLIENT) : util.noop())
    .pipe(global.BS ? global.BS.stream() : util.noop())
})

/**
 * Builds static files.
 */
gulp.task('build:assets', () => {
  const imagemin = require('gulp-imagemin')
  return gulp.src(path.join(PATHS.IN, '/assets/**'))
    .pipe(plumber({ errorHandler }))
    .pipe(IS_PRODUCTION ? imagemin() : util.noop())
    .pipe(gulp.dest(PATHS.CLIENT))
    .pipe(IS_PRODUCTION ? gzip() : util.noop())
    .pipe(IS_PRODUCTION ? gulp.dest(PATHS.CLIENT) : util.noop())
})

/**
 * Turns browsersync reload into a gulp task.
 */
gulp.task('reload:browser', done => {
  global.BS && global.BS.reload()
  done()
})

/**
 * Run all build scripts.
 */
gulp.task('build', gulp.series(
  gulp.parallel('build:assets', 'build:server', 'build:client', 'build:css')
))

// Watch by default.
gulp.task('default', gulp.series('watch'))

/**
 * Print gulp errors and allow the stream to end gracefully.
 */
function errorHandler (err) {
  console.log(pe.render(err))
  this.emit('end')
}
