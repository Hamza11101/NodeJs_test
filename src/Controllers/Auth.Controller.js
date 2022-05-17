const User = require('../Models/User.Model')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
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
        //   res.send({message : "You account has been created successfully."});
        res.send(user);

    } catch (error) {
        next();
    }
}
exports.login = async (req, res, next) => {
    try {
        let login = await User.findOne({ email: req.body.email })
        // res.send(register);
        if (login) {
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(req.body.Password, login.Password);
            if (validPassword) {
                
                res.status(200).json({ message: "Valid password"});
            } else {
                res.status(400).json({ error: "Invalid Password" });
            }
        } else {
            res.status(401).json({ error: "User does not exist" });
        }
    }

    catch (error) {
        next();
    }
}
