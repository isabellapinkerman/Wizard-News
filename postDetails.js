
function htmlString(paramPost) {
    if(!paramPost.id){
        throw new Error('Not Found')
       }

    return (
        `<!DOCTYPE html>
<html>
<head>
  <title>${paramPost.title}</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="news-list">
    <header><img src="/logo.png"/>Wizard News</header>
    </span>${paramPost.title}
            <small>(by ${paramPost.name})</small>
    <p>${paramPost.content}</p>
    <small class="news-info">
            ${paramPost.upvotes} upvotes | ${paramPost.date}
          </small>
  </div>
</body>
</html>`
    )
}


module.exports = {html: htmlString }