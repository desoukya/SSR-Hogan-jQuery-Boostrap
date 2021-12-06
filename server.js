const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// Handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('public'));

/**
 * home page:
 */
app.get('/', function(req,res){
  res.render('index', {
    title: "ICS 509 Software Architecture",
    name: "Dr. Amr Desouky"
  });
});

/**
* about page:
*/
app.get('/about', (req, res) => {
  res.render('about');
});

/**
* contact page:
*/
app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/contact', (req, res) => {
  const results = `name = ${req.body.name}, email = ${req.body.email}, message=${req.body.message}`;
  const postedData = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

  // return posted data back to client
  res.send({
    status: 'Successful 200 Server response',
    ...postedData
  });
});

app.listen('3000', function(){
  console.log('[OK] => HTTP Server listening on http://localhost:3000');
});
