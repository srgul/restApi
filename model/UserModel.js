var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/api');

var Schema = mongoose.Schema;

var userShema = new Schema({
    id: Number,
    name: String,
    lastname: String,
    phone: String,
    email: String,
    companyName: String,
    username: String,
    password: String,
    role: String
});

mongoose.model("User", userShema);

module.exports = mongoose;