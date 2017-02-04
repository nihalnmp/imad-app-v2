var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/bootstrap/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/bootstrap', 'bootstrap.min.css'));
});
app.get('/ui/bootstrap/jquery-3.1.1.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/bootstrap', 'jquery-3.1.1.min.js'));
});
app.get('/ui/bootstrap/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/bootstrap', 'bootstrap.min.js'));
});
app.get('/ui/images/photo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'photo.jpg'));
});
app.get('/ui/images/profile_banner.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'profile_banner.jpg'));
});
app.get('/ui/profile.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});
app.get('/ui/articles.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articles.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
