import url from 'url'

// Creates a Promise that will wait for `ms`.
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
let started = !process.browser

// This middleware will bring up the loading screen when needed in the browser.
export default function loadingScreen ({ req }, next) {
  if (!started) {
    started = true
    return next()
  }

  // Check if we have naviagted to a completely different page.
  // We use this to display the loading animation.
  // There are probably 100 better ways to do this.
  const referrer = req.get('Referrer')
  if (referrer) {
    const { pathname } = url.parse(referrer)
    if (pathname !== req.pathname) {
      document.getElementById('loading-screen').setAttribute('class', 'loading')
      return next().then(sleep.bind(null, 500))
    }
  }

  return next()
}
