/**
 * Created by voliseq on 01.12.2016.
 */
/**
 * Created by voliseq on 26.10.2016.
 */

var express = require('express');
var multer = require('multer');
var router = express.Router();
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('file');
var fs = require('fs');


router.get('/get', function (req, res) {
    res.end('file catcher example');
});

router.post('/', function (req, res) {
    upload(req, res, function (err) {
        console.log(req.file);
        if (err) {
            return res.end(err.toString());
        }

        res.end('File is uploaded');
    });
});
module.exports = router;