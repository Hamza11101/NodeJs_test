const express = require("express");
const router = express.Router();
const ProductController = require('../Controllers/Product.Controller')

router.get('/product',ProductController.getAllProducts);


router.get('/product/:id',ProductController.getOneProduct);

router.post('/product',ProductController.addOneProduct);

router.put('/product/:id',ProductController.updateOneProduct);


router.delete('/product/:id',ProductController.deleteOneProduct);





module.exports = router;
