import html from 'as-html'

export default (app) => {
  app.get("/*", ({ res, locals }, next)=> {
    return next().then(()=> {
      if (typeof res.body !== 'string') return
      res.body = html`
        <!DOCTYPE html>
        <html>
          <head>
            <meta char-set="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            <meta name="description" content={@description}/>
            <title>${locals.title}</title>
            <link rel="shortcut icon" href="/favicon.png"/>
            <link rel="stylesheet" href="/css/app.css"/>
          </head>
          <body>
            <section id="top">
              <div id="menu">
                <a href="#top" id="toggle">&#9776;</a>
                <ul>
                  <li>
                    <a href="/#docs">Application</a>
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
                  <img src="/logo.svg"/>
                </div>
              </div>
            </section>
            !${res.body}
            <script src="/js/app.js"></script>
          </body>
        </html>
      `
    })
  })
}
