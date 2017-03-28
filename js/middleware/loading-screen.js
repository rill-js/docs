import url from 'mini-url'
let started = false

// This middleware will bring up the loading screen when needed in the browser.
export default function loadingScreen ({ req }, next) {
  if (!process.browser || !started) {
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
      const finishLoading = sleepAtleast(300)
      document.getElementById('loading-screen').setAttribute('class', 'loading')
      return next().then(finishLoading)
    }
  }

  return next()
}

// Creates a Promise that will wait for a minimum `ms`.
function sleepAtleast (ms) {
  const started = Date.now()
  return () => {
    const ended = Date.now()
    const delta = ended - started
    const remaining = Math.max(0, ms - delta)
    return new Promise(resolve => setTimeout(resolve, remaining))
  }
}
