exports.addUser =  function(req, res, next) {
    res.json('add user page');
}

exports.getUser = function(req, res, next) {
    res.json('Get User');
}

exports.getOneUser = function(req, res, next) {
    res.json('get one user with params user ıd');
}

exports.updateUser = function(req, res, next) {
    res.json('update user')
}

exports.deleteUser = function(req, res, next) {
    res.json('delete user')
}