import microlight from 'microlight'

export default (ctx, next)=> {
  if (!process.browser) return next()
  return next().then(()=> setImmediate(microlight.reset))
}
