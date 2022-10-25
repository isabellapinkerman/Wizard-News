function htmlString() {
    return (
        `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <header><img src="/logo.png"/>Wizard News</header>
    <div class="not-found">
      <p>Accio Page! 🧙‍♀️ ... Page Not Found</p>
      <img src="/dumbledore-404.gif" />
    </div>
  </body>
  </html>`
    )
}


module.exports = {html: htmlString }