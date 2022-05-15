const express = require("express");
const router = express.Router();
const OrderController = require('../Controllers/Order.Controller')

router.get('/order',OrderController.getAllOrders);


router.get('/order/:id',OrderController.getOneOrder);

router.post('/order',OrderController.addOneOrder);

router.put('/order/:id',OrderController.updateOneOrder);


router.delete('/order/:id',OrderController.deleteOneOrder);

router.put('/product/affectclient/:idorder/:iduser',OrderController.affectClient)

router.delete('/product/desaffectclient/:idorder/:iduser',OrderController.desaffectClient)

router.put('/product/affectproduct/:idorder/:idproduct',OrderController.affectPoduct)

router.delete('/product/desaffectproduct/:idorder/:idproduct',OrderController.desaffectProdect)



module.exports = router;
