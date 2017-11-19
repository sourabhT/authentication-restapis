var express = require('express');
var router = express.Router();
var Users = require('../models/Users');
router.get('/getuser/:id?', function(req, res, next) {
    if (req.params.id) {
        Users.getUserById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Users.getAllUsers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.post('/adduser', function(req, res, next) {
    Users.addUser(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});
router.delete('/deleteuser/:id', function(req, res, next) {
    Users.deleteUser(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/updateuser/:id', function(req, res, next) {
    Users.updateUser(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;
