exports.addObject =  function(req, res, next) {
    res.json('add user page');
}

exports.getObject = function(req, res, next) {
    res.json('Get User');
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