/**
 * Created by voliseq on 01.12.2016.
 */
/**
 * Created by voliseq on 26.10.2016.
 */

var express = require('express'),
    multer = require('multer'),
    mime = require('mime'),
    crypto = require('crypto'),
    Product = require('../models/product'),
    Image = require('../models/image');

var DIR = "./uploads/";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var FINAL_DIR = DIR + req.query.id;
        if(!fs.existsSync(FINAL_DIR)){
            fs.mkdir(FINAL_DIR);
        }
        cb(null, FINAL_DIR); // Absolute path. Folder must exist, will not be created for you.
    },
    filename: function(req, file, cb){
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
        });
    }
});

var router = express.Router();
var DIR = './uploads/';
var upload = multer({ storage: storage });
var fs = require('fs');


router.get('/get', function (req, res) {
    res.end('file catcher example');
});

router.post('/',upload.single('file'), function (req, res) {
    Product.findById(req.query.id, function(err, doc){
        if(err){
            return res.status('404').json({
                title: 'failed to insert an image',
                error: err
            })
        }
        var file = req.file; // multer file
        var image = new Image({
            name: file.filename,
            extension: file.mimetype.split('/')[1]
        });

        image.save(function(err, result){
            if(err){
                return res.status('404').json({
                    title: 'failed to insert an image',
                    error: err
                })
            }

            doc.images.push(result);
            doc.save();
            res.status(201).json({
                message: 'sucesfully saved an image',
                obj: result
            })
            res.end('uploaded file');
        });

    });
});
module.exports = router;