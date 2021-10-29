var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/api');

var Schema = mongoose.Schema;

var objModel = new Schema({
    id: Number,
    name: String,
    dscName: String,
    fileName: Array,
    userId: String
});

mongoose.model("newMdel", objModel);

module.exports = mongoose;