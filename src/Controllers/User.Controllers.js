const User = require('../Models/User.Model')
const bcrypt = require("bcryptjs");

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
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        user.Password = await bcrypt.hash(user.Password, salt);
        // console.log(register.passeword);
        register.save();
        // const user = await user.create(req.body)
        //   res.send({message : "You account has been created successfully."});
        

        await user.save()

        // const user = await user.create(req.body)
        res.send(user)

    } catch (error) {
        console.log(error);
        const message = error.message ? error.message : 'Internal server error'
        res.status(422).send({message: message})
        // next();

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



