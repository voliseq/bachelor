/**
 * Created by voliseq on 26.10.2016.
 */

var express = require('express');
var router = express.Router();
var Product = require('../models/product');
router.post('/', function(req, res, next){
    console.log(req.body);
    var product = new Product({
        name: req.body.name,
        product_id: req.body.product_id,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity
    });
    console.log(product);
    // console.log(user);
    product.save(function(err, result){
        if(err){
            return res.status(404).json({
                title: 'An error occured',
                error: err
            })
        }
        res.status(200).json({
            message: 'successfully added a new product',
            obj: result
        })
    })
});
module.exports = router;