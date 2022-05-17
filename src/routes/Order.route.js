const express = require("express");
const router = express.Router();
const OrderController = require('../Controllers/Order.Controller')

router.get('/order',OrderController.getAllOrder);


router.get('/order/:id',OrderController.getOneOrder);

router.post('/order',OrderController.addOneOrder);

router.put('/order/:id',OrderController.updateOneOrder);


router.delete('/order/:id',OrderController.deleteOneOrder);

router.put('/order/affectclient/:idorder/:iduser',OrderController.affectClient)

router.delete('/order/desaffectclient/:idorder/:iduser',OrderController.desaffectClient)

router.put('/order/affectproduct/:idorder/:idproduct',OrderController.affectPoduct)

router.delete('/order/desaffectproduct/:idorder/:idproduct',OrderController.desaffectProdect)



module.exports = router;
