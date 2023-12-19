// create web server
const express = require('express');
const app = express();
const port = 3000;

// import data
const comments = require('./data/comments');

// set view engine
app.set('view engine', 'ejs');

// set path for static files
app.use(express.static('public'));

// home page
app.get('/', (req, res) => {
  res.render('home', {
    comments: comments
  });
});

// comment page
app.get('/comments/:id', (req, res) => {
  res.render('comments', {
    comment: comments[req.params.id]
  });
});

// listen on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});