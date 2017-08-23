import marked from 'marked'
import hljs from 'highlight.js/lib/highlight'
import bash from 'highlight.js/lib/languages/bash'
import html from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'

// Setup highlight.js languages.
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('console', bash)
hljs.registerLanguage('html', html)
hljs.registerLanguage('xml', html)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('javascript', javascript)

// Setup custom renderer for marked which uses highlight.js for syntax highlighting.
const renderer = new marked.Renderer()
renderer.code = (code, lang) => {
  lang = lang.toLowerCase()
  code = hljs.highlight(lang, code, true).value
  return `<pre><code class="hljs ${lang}">${code}</code></pre>`
}
marked.setOptions({ renderer })

/**
 * Parses text as markdown using marked.js and the custom renderer above.
 */
export default function markdown (text) {
  return marked(text)
}
