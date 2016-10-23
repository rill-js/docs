'use strict'

const path = require('path')
const gulp = require('gulp')
const util = require('gulp-util')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const PrettyError = require('pretty-error')
const pe = new PrettyError()
  .skipPackage('babylon')
  .skipPackage('stylus')
  .skipNodeFiles()

// Misc constants.
const IS_DEV = !process.env.NODE_ENV
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const PATHS = {
  IN: __dirname,
  RUN: path.join(__dirname, '/server.js'),
  CLIENT: path.join(__dirname, '/.build/client'),
  SERVER: path.join(__dirname, '/.build/server')
}

/**
 * Starts dev server.
 */
gulp.task('start', (server => done => {
  const cp = require('child_process')
  let finished = false

  if (server) {
    // Kill existing process.
    server.kill()
  } else {
    // Ensure childprocess dies on exit.
    process.once('SIGINT', handleExit.bind(null, true))
    process.once('uncaughtException', handleExit.bind(null, true))
    process.once('exit', handleExit.bind(null, false))
  }

  // Start a new instance of the server.
  server = cp.fork(PATHS.RUN)
    .on('exit', finish)
    .on('error', finish)
    .on('message', message => { if (~['online', 'error'].indexOf(message)) finish() })

  /**
   * Handle process exit (cleans up running server).
   */
  function handleExit (exit) {
    server && server.kill()
    exit && process.exit()
    finish()
  }

  /**
   * Only finish a gulp task if it hasn't been finished before.
   */
  function finish () {
    if (finished) return
    finished = true
    done()
  }
})())

/**
 * Start browser sync and file watching.
 */
gulp.task('watch', done => {
  // Start browser sync.
  global.BS = require('browser-sync').create()
  global.BS.init({
    open: false,
    notify: false,
    ghostMode: false,
    logFileChanges: false,
    proxy: 'localhost:3002'
  })
  // Watch assets then reload browser.
  gulp.watch(path.join(PATHS.IN, '/assets/**/*'), gulp.series('build:assets'))
  // Watch css and build css then reload browser.
  gulp.watch(path.join(PATHS.IN, '/styles/**/*.styl'), gulp.series('build:css'))
  // Watch app and build client/server then reload browser.
  gulp.watch(path.join(PATHS.IN, '/js/**/*.js'), gulp.series(
    gulp.parallel(gulp.series('build:server', 'start'), 'build:client'),
    'reload:browser'
  ))
  // Finish gulp task.
  done()
})

/**
 * Build server side js.
 */
gulp.task('build:server', () => {
  const babel = require('gulp-babel')
  const prune = require('gulp-prune')
  return gulp.src(path.join(PATHS.IN, '/js/**/*.js'))
    .pipe(plumber({ errorHandler }))
    .pipe(prune({ dest: PATHS.SERVER, ext: '.js' }))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write({ sourceRoot: PATHS.IN, includeContent: false }))
    .pipe(gulp.dest(PATHS.SERVER))
})

/**
 * Build client side js.
 */
gulp.task('build:client', () => {
  const browserify = require('gulp-bro')
  return gulp.src(path.join(PATHS.IN, '/js/index.js'), { read: false })
    .pipe(plumber({ errorHandler }))
    .pipe(browserify({
      cacheFile: '.buildcache',
      fullPaths: IS_DEV,
      debug: true,
      error: 'emit'
    }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(IS_PRODUCTION ? require('gulp-uglify')() : util.noop())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.CLIENT))
})

/**
 * Build and compress css.
 */
gulp.task('build:css', function () {
  var cssmin = require('cssnano')
  var concat = require('gulp-concat')
  var postcss = require('gulp-postcss')
  return gulp.src(path.join(PATHS.IN, '/css/*.css'))
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(sourcemaps.init())
    .pipe(concat('index.css'))
    .pipe(postcss([cssmin()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.CLIENT))
    .pipe(global.BS ? global.BS.stream() : util.noop())
})

/**
 * Builds static files.
 */
gulp.task('build:assets', () => {
  const prune = require('gulp-prune')
  const changed = require('gulp-changed')
  return gulp.src(path.join(PATHS.IN, '/assets/**/*'))
    .pipe(plumber({ errorHandler }))
    .pipe(prune({
      dest: PATHS.CLIENT,
      filter: file => !file.startsWith('index')
    }))
    .pipe(changed(PATHS.CLIENT, { hasChanged: changed.compareSha1Digest }))
    .pipe(IS_PRODUCTION ? require('gulp-imagemin')({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      multipass: true,
      svgoPlugins: [
        { removeViewBox: true },
        { removeUselessStrokeAndFill: true },
        { removeEmptyAttrs: true }
      ]
    }) : util.noop())
    .pipe(gulp.dest(PATHS.CLIENT))
    .pipe(global.BS ? global.BS.stream() : util.noop())
})

/**
 * Go through to client folder and gzip all files.
 */
gulp.task('compress', () => {
  const gzip = require('gulp-gzip')
  return gulp.src(path.join(PATHS.CLIENT, '**/!(*.gz)'))
    .pipe(plumber({ errorHandler }))
    .pipe(gzip({
      gzipOptions: { level: 9, memLevel: 9 },
      skipGrowingFiles: true,
      append: true
    }))
    .pipe(gulp.dest(PATHS.CLIENT))
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

/**
 * By default start the dev server and start watching.
 */
gulp.task('default', gulp.parallel('start', 'watch'))

/**
 * Print gulp errors and allow the stream to end gracefully.
 */
function errorHandler (err) {
  console.log(pe.render(err))
  this.emit('end')
}
