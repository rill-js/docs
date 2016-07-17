import marked from 'marked'
marked.setOptions({ langPrefix: 'microlight lang-' })

export const markdown = text => marked(text)

