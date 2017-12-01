var express = require('express');
var router = express.Router();
var Login = require('../models/Login');

// Asynchronous
const crypto = require('crypto');


router.post('/', function(req, res, next) {
  Login.checkLoginCredential(req.body, function(err, result){
    if(err) {
      res.json(err);
    } else {


      var username = result[0].username;
      console.log(username);


      crypto.randomBytes(256, (err, username) => {
        if (err) throw err;
        console.log(`${username.length} bytes of random data: ${username.toString('hex')}`);
      });

      if(result){
        res.json(result);
      }else{
        res.json(result);
      }

    }
  });
  return "count";
});


module.exports = router;
