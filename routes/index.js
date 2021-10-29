var express = require('express');
var router = express.Router();
var mongoose =require('mongoose')
var User = mongoose.model('User')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login')
});

router.get('/login', function(req, res, next) {
  res.json('login')
})

router.post('/login', function(req, res, next) {
  User.find({username: req.body.username, password: req.body.password}, (err, data) => {
    console.log(data[0]._id.toString());
    res.json({
      message: "login giriş yapıldı",
      data: data[0]._id.toString(),
      role: data[0].role,
      status: '200'
    })
  })
})

module.exports = router;