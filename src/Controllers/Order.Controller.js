const Order = require('../Models/Order.Model')

exports.getAllOrder = async (req, res, next) => {
    try {
        let order = await Product.find().populate('Product_List','Client')
        res.send(order);
    } catch (error) {
        next();
    }
}

exports.getOneOrder = async (req, res, next) => {
    try {
        let order = await Order.findById(req.params.id)
        res.send(order);

    } catch (error) {
        next();
    }
}

exports.addOneOrder = async (req, res, next) => {

    try {
        const order = new Order({
            TotalPrice: req.body.Name,
            Product_List: [],
            Client: [],
            
            
        })
        await order.save()

        // const user = await user.create(req.body)
        res.send(order)

    } catch (error) {
        next();

    }

}

exports.updateOneProduct = async (req, res, next) => {
    try {
        let order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(order)
    }
    catch (error) {
        next();
    }
}

exports.deleteOneProduct = async (req, res, next) => {
    try {
        let order = await Order.findByIdAndRemove(req.params.id);
        res.send(order);
    } catch (error) {
        next()
    }
}


exports.affectClient = async (req, res, next) => {
    try {
        const addOrderToClient = await Order.findByIdAndUpdate(
            req.params.idorder,
            { $push: { Client: req.params.iduser } },
            { new: true }
        )
        res.send(addOrderToClient);

    } catch (error) {
        next()

    }
}

exports.desaffectClient = async (req, res, next) => {
    try {
        const deleteOrderFromUser = await Order.findByIdAndRemove(
            req.params.iduser,
            { $pull: { Client: req.params.iduser } },
            { new: true }
        )
        res.send(deleteOrderFromUser);

    } catch (error) {
        next()

    }
}  


exports.affectPoduct = async (req, res, next) => {
    try {
        const addOrderToProduct = await Order.findByIdAndUpdate(
            req.params.idproduct,
            { $push: { Product_List: req.params.idproduct } },
            { new: true }
        )
        res.send(addOrderToProduct);

    } catch (error) {
        next()

    }
}

exports.desaffectProdect = async (req, res, next) => {
    try {
        const deleteOrderFromProduct = await Order.findByIdAndRemove(
            req.params.iduser,
            { $pull: { Product_List: req.params.idproduct } },
            { new: true }
        )
        res.send(deleteOrderFromProduct);

    } catch (error) {
        next()

    }
}  

