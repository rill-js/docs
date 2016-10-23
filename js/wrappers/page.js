import fs from 'fs'
import path from 'path'
import html from 'as-html'
const VERSION = process.env.GIT_COMMIT
const THEME = fs.readFileSync(path.join(__dirname, '../../node_modules/highlight.js/styles/ocean.css'), 'utf8')

/**
 * This wrapper is a middleware which will run on every page, wrapping it in some html.
 * Larger apps will typically have multiple wrappers for sections of the site, such as a dashboard.
 */
export default async function pageWrapper ({ req, res, locals }, next) {
  await next()
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
        <meta property="og:title" content="${locals.title}"/>
        <meta property="og:url" content="${req.href}"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Logo.jpg"/>
        <link rel="shortcut icon" href="/favicon.png"/>
        <link rel="stylesheet" href="/index.css?v=${VERSION}"/>
      </head>
      <body>
        <a href="https://github.com/rill-js/rill"><img style="position:absolute;top:0;left:0;border:0;" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"></a>

        <section id="top">
          <div id="menu">
            <a href="#top" id="toggle">&#9776;</a>
            <ul>
              <li><b>Documentation</b><hr/></li>
              <li>
                <a href="/application#docs">Application</a>
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
              <li><br/><b>Community</b><hr/></li>
              <li>
                <a href="/#community">Links</a>
              </li>
              <li>
                <a href="/#articles">Articles</a>
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

        <div id="loading-screen"><div class="loader"></div></div>

        <style>${THEME}</style>
        <script src="/index.js?v=${VERSION}"></script>
        <script>
          !function(a,p,i,d,o,c,s){a.GoogleAnalyticsObject=i;a[i]||(a[i]=function(){
          (a[i].q=a[i].q||[]).push(arguments)});a[i].l=+new Date;c=p.createElement(d);
          s=p.getElementsByTagName(d)[0];c.src=o;s.parentNode.insertBefore(c,s)}
          (window,document,'ga','script','//www.google-analytics.com/analytics.js');
          ga('create', 'UA-53202133-2', 'auto');
          ga('send', 'pageview');
        </script>
      </body>
    </html>
  `
}
