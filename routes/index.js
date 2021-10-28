var express = require('express');
var router = express.Router();
var mongoose =require('mongoose')
var User = mongoose.model('User')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('200');
});

router.get('/login', function(req, res, next) {
  res.json('login')
})

module.exports = router;