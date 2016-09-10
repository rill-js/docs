import loadingScreen from './loading-screen'

export default router => {
  // Only use loading screen in the browser.
  if (process.browser) router.use(loadingScreen)
}
