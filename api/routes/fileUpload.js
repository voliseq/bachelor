/**
 * Created by voliseq on 01.12.2016.
 */
/**
 * Created by voliseq on 26.10.2016.
 */

var express = require('express');
var router = express.Router();
router.post('/', function(req, res, next){
    console.log(req.body);
    // console.log(user);
    // product.save(function(err, result){
    //     if(err){
    //         return res.status(404).json({
    //             title: 'An error occured',
    //             error: err
    //         })
    //     }
    //     res.status(200).json({
    //         message: 'successfully added a new product',
    //         obj: result
    //     })
    // })
});
module.exports = router;