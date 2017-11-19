var db = require('../db'); //reference of dbconnection.js
var User = {
    getAllUsers: function(callback) {
        return db.query("Select * from users", callback);
    },
    getUserById: function(id, callback) {
        return db.query("select * from users where user_id=?", [id], callback);
    },
    addUser: function(User, callback) {
        return db.query("Insert into users values(?,?,?)", [User.Id, User.Title, User.Status], callback);
    },
    deleteUser: function(id, callback) {
        return db.query("delete from users where user_id=?", [id], callback);
    },
    updateUser: function(id, User, callback) {
        return db.query("update users set Title=?,Status=? where user_id=?", [User.Title, User.Status, id], callback);
    }
};
module.exports = User;
