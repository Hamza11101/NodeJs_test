const Product = require('../Models/Product.Model')

exports.getAllProduct = async (req, res, next) => {
    try {
        let product = await Product.find().populate('Order')
        res.send(product);
    } catch (error) {
        next();
    }
}

exports.getOneProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id)
        res.send(product);

    } catch (error) {
        next();
    }
}

exports.addOneProduct = async (req, res, next) => {

    try {
        const product = new Product({
            Name: req.body.Name,
            discreption: req.body.discreption,
            quantity: req.body.quantity,
            price: req.body.price,
            
            
        })
        await product.save()

        // const user = await user.create(req.body)
        res.send(product)

    } catch (error) {
        next();

    }

}

exports.updateOneProduct = async (req, res, next) => {
    try {
        let product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(product)
    }
    catch (error) {
        next();
    }
}

exports.deleteOneProduct = async (req, res, next) => {
    try {
        let product = await Product.findByIdAndRemove(req.params.id);
        res.send(product);
    } catch (error) {
        next()
    }
}