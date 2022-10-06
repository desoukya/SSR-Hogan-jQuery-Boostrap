const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static('public'));

/**
 * home page:
 */
app.get('/', function(req,res){
  res.render('index', {
    title: "SE II",
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

/**
* users page:
*/
app.get('/users', (req, res) => {
  res.render('users');
});

/**
* users list:
*/
app.get('/users/list', (req, res) => {
  res.json([
    {fname: 'Amr', lname: 'Desouky', handler: 'desouky' },
    {fname: 'Farah', lname: 'Manie', handler: 'fmanie' },
  ]);
});

/**
* populate contact form with the following data
*/
app.get('/contact/1', (req, res) => {
  res.send({
    name: 'Mohamed Ahmad',
    email: 'mohamed.ahmad@giu-uni.de',
    message: 'Yaaay fetching user from server works!'
  });
});

app.listen('3000', function(){
  console.log('[OK] => HTTP Server listening on http://localhost:3000');
});
