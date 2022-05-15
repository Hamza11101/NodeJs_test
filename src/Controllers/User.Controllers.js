const User = require('../Models/User.Model')

exports.getAllUsers = async (req, res, next) => {
    try {
        let user = await User.find().populate('Order')
        res.send(user);
    } catch (error) {
        next();
    }
}

exports.getOneUser = async (req, res, next) => {
    try {
        let user = await User.findById(req.params.id)
        res.send(user);

    } catch (error) {
        next();
    }
}

exports.addOneUser = async (req, res, next) => {

    try {
        const user = new User({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password,
            
        })
        await user.save()

        // const user = await user.create(req.body)
        res.send(user)

    } catch (error) {
        next();

    }

}

exports.updateOneUser = async (req, res, next) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(user)
    }
    catch (error) {
        next();
    }
}

exports.deleteOneUser = async (req, res, next) => {
    try {
        let user = await User.findByIdAndRemove(req.params.id);
        res.send(user);
    } catch (error) {
        next()
    }
}



