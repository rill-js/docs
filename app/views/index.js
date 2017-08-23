import router from 'rill'
import page from '@rill/page'
import render from '@rill/marko'
import { register } from '@rill/loader'
import { description, author, keywords } from 'rill/package.json'
import imgFavicon from '../assets/favicon.png'
import homePage from './index.marko'
import docsPage from './docs.marko'

// Register doc loader. (does caching and hydrating).
// Loads the docs from github every 12 hours.
register({ name: 'docs', ttl: '12 hours' }, async ({ fetch }, section) => {
  if (section === 'application') section = 'index'
  const response = await fetch(`https://raw.githubusercontent.com/rill-js/rill/master/docs/api/${section}.md`)
  return response.text()
})

// Expose app routes.
export default router()
  .get(page
    .html({ lang: 'en' })
    .title('Rill Documentation')
    .meta({ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' })
    .meta({ name: 'viewport', content: 'width=device-width,initial-scale=1' })
    .meta({ name: 'author', content: author.name })
    .meta({ name: 'description', content: description })
    .meta({ name: 'keywords', content: keywords.join(',') })
    .meta({ name: 'theme-color', content: '#00a1df' })
    .link({ rel: 'shortcut icon', href: imgFavicon })
    .link({ rel: 'stylesheet', href: '/index.css' })
    .script({ async: true, src: '/index.js' })
  )
  .get('/*', ({ res }, next) => {
    res.append('Link', '</index.js>; rel=preload; as=script;')
    res.append('Link', '</index.css>; rel=preload; as=style;')
    return next()
  })
  .get('/', render(homePage))
  .get('/:section', ({ load, locals, req }, next) => {
    const { section } = req.params
    if (!['application', 'context', 'request', 'response'].includes(section)) return
    locals.pendingContent = load('docs', section)
    return next()
  }, render(docsPage))
