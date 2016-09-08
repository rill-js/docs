import marked from 'marked'
import hljs from 'highlight.js/lib/highlight'
import bash from 'highlight.js/lib/languages/bash'
import html from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('console', bash)
hljs.registerLanguage('html', html)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('javascript', javascript)

const renderer = new marked.Renderer()
renderer.code = (code, lang) => {
  lang = lang.toLowerCase()
  code = hljs.highlight(lang, code, true).value
  return `<pre><code class="hljs ${lang}">${code}</code></pre>`
}
marked.setOptions({ renderer })

export const markdown = text => marked(text)
