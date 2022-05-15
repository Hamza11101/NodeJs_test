const mongoose = require("mongoose")
const schema=mongoose.Schema;



const UserSchema = new schema({
    FirstName:{
        type:String,
        required:[true," first name field is requires"]
    },
    LastName:{
        type:String,
        required:[true,"Last name field is requires"]
    },

    Email:{
        type:String,
        required:[true,"email field is requires"]
    },
    Password:{
        type:String,
        required:[true,"password field is requires"]
    },
    role:{
        role:
        "Client"
    },
    Order: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'}
    
    },{
        versionKey:false,
       timestamps:true 
    }
    
    )


    const User = mongoose.model('User',UserSchema)

module.exports = User;