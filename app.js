const express = require('express');
const app = express(); // creates instance of an express application

// build my own logging - require Morgan/Volleyball instead of this
app.use(function (req, res, next) {
  // do your logging here
  // call `next`, or else your app will be a black hole — receiving requests but never properly responding
  console.log('Request:' + req.method, 'Response:' + res.statusCode);
  next();
});

// logging for only specific pages
app.use('/special/', function (req, res, next) {
  console.log('You\'re a wizard Harry!');
  next();
});

app.get('/', (req, res) => res.send('Welcome to Dan\'s first Express App!'));

// insert a /news page
app.get('/news', (req, res) => res.send('You don\'t want to see the news today...'));

// insert a test /special page
app.get('/special', (req, res) => res.send('hola hola'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
