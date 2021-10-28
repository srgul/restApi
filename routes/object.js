var express = require('express');
var router = express.Router();
var objectController = require('../controller/ObjectController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/allObject', objectController.getObject)|

router.post('/add', objectController.addObject)

router.get('/update', objectController.updateObject)

router.get('/oneObject', objectController.getOneObject)

router.get('/delete', objectController.deleteObject)

module.exports = router;
