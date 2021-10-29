var mongoose = require('mongoose');
var newMdel = mongoose.model('newMdel'); 

exports.addObject =  function(req, res, next) {
    new newMdel({
        name: req.body.objName,
        dscName: req.body.dscName,
        fileName: req.body.fileName,
        userId: req.body.userId
    }).save(function(err, commnet) {
        res.json({
            message: "Obje oluşturuldu",
            status: "200",
            data: ""
        })
    })
}

exports.getObject = function(req, res, next) {
    res.json('get object')
}

exports.getOneObject = function(req, res, next) {
    res.json('get one user with params user ıd');
}

exports.updateObject = function(req, res, next) {
    res.json('update user')
}

exports.deleteObject = function(req, res, next) {
    res.json('delete user')
}