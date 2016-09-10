import fs from 'fs'
import path from 'path'
import html from 'as-html'
import markdown from '../utils/markdown'
import insertLiveExamples from '../utils/insert-live-examples'

const text = fs.readFileSync(path.join(__dirname, '../../node_modules/rill/README.md'), 'utf8')
const markedText = markdown(text)

export default app => {
  // Setup the homepage renderer at path '/'.
  app.get('/', ctx => {
    const { res } = ctx
    res.body = html`
      <section id="docs">
        <div class="content">
          <h1>What is Rill?</h1>
          !${insertLiveExamples(markedText, ctx)}
        </div>
      </section>
    `
  })
}
