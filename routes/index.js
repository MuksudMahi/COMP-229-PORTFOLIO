var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' , id:'bg-home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' , id:'bg-home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' , id:'bg-other'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' , id:'bg-other'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' , id:'bg-other'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' , id:'bg-other'});
});

module.exports = router;
