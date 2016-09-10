import { stringify } from 'circular-json'
import { decode } from 'he'
const matchCtxLiteral = /(ctx\.[^ ;]+);? ?\/\/ (.*)?/g

/**
 * This utility will go through a string and find any examples that look like `ctx.req.query`.
 * It will then replace all of these strings with their current live value.
 */
export default function insertLiveExamples (str, ctx) {
  ctx = shallowCopy(ctx)
  ctx.req = shallowCopy(ctx.req)
  ctx.res = shallowCopy(ctx.res)

  // Remove circular references.
  ctx.req.ctx = '[Circular Reference]'
  ctx.req.original = '[IncommingRequest]'
  ctx.res.ctx = '[Circular Reference]'
  ctx.res.original = '[ServerResponse]'

  return String(str).replace(matchCtxLiteral, (match, prop, val) => {
    return match.replace(val, stringify(eval(decode(prop)), null, 4)) // eslint-disable-line
  })
}

/**
 * Creates a shallow copy of an object.
 */
function shallowCopy (obj) {
  const result = {}
  for (let key in obj) result[key] = obj[key]
  return result
}
