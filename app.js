const express = require("express");
const postBank = require("./postBank");
const app = express();
const morgan = require('morgan');
const path = require('path')

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



app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
  const posts = postBank.list()
  const time = Date.now()

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map(post => `
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
</html>`;

  res.send(html)
});


app.get('/posts/:id', (req, res)=>{
const id = req.params.id;
const post = postBank.find(id)
let htmlString = `<!DOCTYPE html>
<html>
<head>
  <title>${post.title}</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="news-list">
    <header><img src="/logo.png"/>Wizard News</header>
    </span>${post.title}
            <small>(by ${post.name})</small>
    <p>${post.content}</p>
    <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
  </div>
</body>
</html>`

if(!post.id){
 throw new Error('Not Found')
}

res.send(htmlString)
})

app.use((error, req, res, next)=>{
  console.error(error.stack)
  const htmlString =  `
  <!DOCTYPE html>
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

  res.status(404).send(htmlString)
})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
