import fs from 'fs'
import path from 'path'
import html from 'as-html'
import markdown from '../../utils/markdown'
import insertLiveExamples from '../../utils/insert-live-examples'
const text = fs.readFileSync(path.join(__dirname, '../../../node_modules/rill/docs/api/response.md'), 'utf8')

export default async function responseView (ctx) {
  const { res } = ctx
  res.body = html`
    <section id="docs">
      <div class="content">
        !${markdown(insertLiveExamples(text, ctx))}
      </div>
    </section>
  `
}
