var express = require('express');
var router = express.Router();
var User = require('../models/user.mong.model');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/', function (req, res, next) {
    var newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    User.addNewUser(newUser, function (err, result) {
        if (err) {
            return res.status(500).json({
                error: err,
                message: 'failed to make a new user, please try again later'
            });
        }
        res.status(201).json({
            result: result,
            message: 'succesfully created a new account'
        });
    });
});


module.exports = router;
