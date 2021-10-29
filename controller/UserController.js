var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.addUser =  function(req, res, next) {
    new User({
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        companyName: req.body.companyName,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    }).save(function(error, comment) {
        res.json({
            message: "user created",
            status: "ok"
        })
    })
}

exports.getUser = function(req, res, next) {
    User.find(function(err, data) {
        res.json(data)
    })
}

exports.getOneUser = function(req, res, next) {
    User.findById(req.query.id, function(err, data) {
        res.json(data)
    })
}

exports.updateUser = function(req, res, next) {
    res.json('update user')
}

exports.deleteUser = function(req, res, next) {
    User.findByIdAndDelete(req.query.id, function(err, data) {
        res.json(data)
    })
}