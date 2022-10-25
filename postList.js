function timeToEnglish(ms){
    const days = Math.floor(ms/86400000)
    ms = ms%86400000
    const hours = Math.floor(ms/3600000)
    ms = ms%3600000
    const minute = Math.floor(ms/60000)
    ms = ms%60000
    const seconds = Math.floor(ms/1000)
    ms = ms%1000
  
    return `posted ${days}, days, ${hours}, hours, ${minute}, minutes, ${seconds}, seconds ago`
  }

function htmlString(paramList) {
    const time = Date.now()

    return (
        `<!DOCTYPE html>
        <html>
        <head>
            <title>Wizard News</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <div class="news-list">
                <header><img src="/logo.png"/>Wizard News</header>
    ${paramList.map(post => `
      <div class='news-item'>
        <p>
          <span class="news-position">${post.id}. ▲</span><a href='/posts/${post.id}'>${post.title}</a>
          <small>(by ${post.name})</small>
        </p>
        <small class="news-info">
          ${post.upvotes} upvotes | ${timeToEnglish(time-post.date)}
        </small>
      </div>`
    ).join('')}
  </div>
</body>
</html>`
    )
} ;

module.exports = {html: htmlString }