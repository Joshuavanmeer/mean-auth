var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user.mong.model');
var config = require('../config/database');
var jwt = require('jsonwebtoken');



router.post('/register', function (req, res, next) {
    var newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    newUser.save(newUser, function (err, result) {
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




router.post('/login', function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, userDoc) {
        if (err) {
            return res.status(500).json({
                message: 'failed to retrieve user, please try logging in again',
                error: err
            });
        }
        if (!userDoc) {
            return res.status(401).json({
                message: 'user credentials are invalid',
                error: err
            });
        }
        if (!bcrypt.compareSync(req.body.password, userDoc.password)) {
            return res.status(401).json({
                error: err,
                message: 'User credentials are invalid'
            });
        }
        var jsonToken = jwt.sign({ user: userDoc }, config.secret, { expiresIn: 7200 } );
        return res.status(200).json({
            message: 'Signin succesful',
            token: jsonToken,
            user: {
                name: userDoc.name,
                username: userDoc.username,
                email: userDoc.email,
                userId: userDoc._id
            }
        });
    });
});




module.exports = router;