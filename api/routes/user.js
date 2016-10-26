/**
 * Created by voliseq on 26.10.2016.
 */

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
router.post('/', function(req, res, next){
    console.log(req);
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash.generate(req.body.password),
        email: req.body.email
    });
    user.save(function(err, result){
        if(err){
            return res.status(404).json({
                title: 'An error occured',
                error: err
            })
        }
        res.status(200).json({
            message: 'success',
            obj: result
        })
    })
});

router.post('/signin', function(req, res, next){
    User.findOne({email: req.body.email}, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'no user',
                error: {message: 'no user'}
            });
        }
        if(!passwordHash.verify(req.body.password, doc.password)){
            return res.status(404).json({
                title: 'invalid pass',
                error: {message: 'invalid pass'}
            })
        }
        var token = jwt.sign({user: doc}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'success',
            token: token,
            userId: doc._id
        })

    })
});

module.exports = router;
