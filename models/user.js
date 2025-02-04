var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    college: String,
    qno: Number,
    start: Date,
    end: Date
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);