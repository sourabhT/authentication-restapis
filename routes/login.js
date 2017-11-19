var express = require('express');
var router = express.Router();
var Login = require('../models/Login');

router.post('/', function(req, res, next) {
  console.log(req.body);
  Login.checkLoginCredential(req.body, function(err, result){
    if(err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
  return "count";
});


module.exports = router;
