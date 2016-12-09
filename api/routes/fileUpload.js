/**
 * Created by voliseq on 01.12.2016.
 */
/**
 * Created by voliseq on 26.10.2016.
 */

var express = require('express');
var multer = require('multer');
var DIR = "./uploads/";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var FINAL_DIR = DIR + req.query.id;
        if(!fs.existsSync(FINAL_DIR)){
            fs.mkdir(FINAL_DIR);
        }
        cb(null, FINAL_DIR); // Absolute path. Folder must exist, will not be created for you.
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
    console.log("file: "+JSON.stringify(req.file));
    console.log("files: "+JSON.stringify(req.files));
    res.end('uploaded file');
});
module.exports = router;