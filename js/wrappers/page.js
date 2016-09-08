import fs from 'fs'
import path from 'path'
import html from 'as-html'
const theme = fs.readFileSync(path.join(__dirname, '../../node_modules/highlight.js/styles/ocean.css'), 'utf8')

export default (app) => {
  app.get('/*', ({ req, res, locals }, next) => {
    return next().then(() => {
      if (typeof res.body !== 'string') return
      res.body = html`
        <!DOCTYPE html>
        <html>
          <head>
            <meta char-set="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            <meta name="description" content="${locals.description}"/>
            <title>${locals.title}</title>
            <link rel="shortcut icon" href="/favicon.png"/>
            <link rel="stylesheet" href="/index.css"/>
          </head>
          <body>
            <section id="top">
              <div id="menu">
                <a href="#top" id="toggle">&#9776;</a>
                <ul>
                  <li>
                    <a href="/app#docs">Application</a>
                  </li>
                  <li>
                    <a href="/context#docs">Context</a>
                  </li>
                  <li>
                    <a href="/request#docs">Request</a>
                  </li>
                  <li>
                    <a href="/response#docs">Response</a>
                  </li>
                  <li>
                    <a href="/links#docs">Links</a>
                  </li>
                </ul>
              </div>
              <div id="heading">
                <div id="logo">
                  <a href="/#docs">
                    <img src="/logo.svg"/>
                  </a>
                </div>
              </div>
            </section>
            <div data-key="${req.pathname}">!${res.body}</div>
            <style>${theme}</style>
            <script src="/index.js"></script>
          </body>
        </html>
      `
    })
  })
}
