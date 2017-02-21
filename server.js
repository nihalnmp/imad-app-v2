var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

//request routes

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.php'));
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

app.get('/ui/profile.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.php'));
});
app.get('/ui/articles.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articles.php'));
});

//request routes

//Images

app.get('/ui/images/photo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'photo.jpg'));
});
app.get('/ui/images/banner.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'banner.png'));
});
app.get('/ui/images/fb_icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'fb_icon.png'));
});
app.get('/ui/images/linkedin_icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'linkedin_icon.png'));
});
app.get('/ui/images/twitter_icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'twitter_icon.png'));
});
app.get('/ui/images/nihal.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'nihal.jpg'));
});
app.get('/ui/images/profile_banner.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'profile_banner.jpg'));
});

//Images

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
