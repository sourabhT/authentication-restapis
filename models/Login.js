var db = require('../db'); //reference of dbconnection.js
var User = {
    checkLoginCredential: function(User, callback) {
        return db.query("select * from users where username=? and password=?", [User.username,User.password], callback);
    },
};
module.exports = User;
