var express = require('express');
var router = express.Router();
var userController = require('../controller/UserController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/alluser', userController.getUser)|

router.post('/add', userController.addUser)

router.get('/update', userController.updateUser)

router.get('/getUser', userController.getOneUser)

router.get('/delete', userController.deleteUser)

module.exports = router;
