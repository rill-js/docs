import html from 'as-html'
import redirect from '@rill/redirect'
import { stringify } from 'circular-json'
import { decode } from 'he'
import docs from '../docs'
import { markdown } from '../helpers'

const matchCtxLiteral = /(ctx\.[^ ;]+);? ?\/\/ (.*)?/g

export default (app) => {
  Object.keys(docs).forEach(pathname => {
    const text = markdown(docs[pathname])
    app.get(pathname, (ctx) => {
      ctx.res.body = html`
        <section id="docs">
          <div class="content">
            !${pathname === '/' && (
              html`
                <h1>What is Rill?</h1>
              `
            )}
            !${replaceCtxProps(text, ctx)}
          </div>
        </section>
      `
    })
  })
}

function replaceCtxProps (str, ctx) {
  var ctx = shallowCopy(ctx)
  ctx.req = shallowCopy(ctx.req)
  ctx.res = shallowCopy(ctx.res)

  // Remove circular references.
  ctx.req.ctx = '[Circular Reference]'
  ctx.req.original = '[IncommingRequest]'
  ctx.res.ctx = '[Circular Reference]'
  ctx.res.original = '[ServerResponse]'

  return String(str).replace(matchCtxLiteral, (match, prop, val) => {
    return match.replace(val, stringify(eval(decode(prop)), null, 4))
  })
}

function shallowCopy (obj) {
  const result = {}
  for (let key in obj) result[key] = obj[key]
  return result
}
