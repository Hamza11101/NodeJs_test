const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/User.Controllers')
const passport = require('passport')



router.get('/user',passport.authenticate('bearer', { session: false }),UserController.getAllUsers);


router.get('/user/:id',UserController.getOneUser);

router.post('/user',UserController.addOneUser);

router.put('/user/:id',UserController.updateOneUser);


router.delete('/user/:id',UserController.deleteOneUser);





module.exports = router;
