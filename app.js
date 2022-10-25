const express = require("express");
const postBank = require("./postBank");
const app = express();
const morgan = require('morgan');
const path = require('path')
const postList = require('./postList')
const postDetails = require('./postDetails')
const errorPage = require('./errorPage')




app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
  const posts = postBank.list()
  res.send(postList.html(posts))
});


app.get('/posts/:id', (req, res)=>{
const id = req.params.id;
const post = postBank.find(id)

res.send(postDetails.html(post))
})

app.use((error, req, res, next)=>{
  console.error(error.stack)

  res.status(404).send(errorPage.html())
})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
