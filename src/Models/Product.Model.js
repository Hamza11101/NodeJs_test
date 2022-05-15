const mongoose = require("mongoose")
const schema=mongoose.Schema;



const ProductSchema = new schema({
    Name:{
        type:String,
        required:[true," first name field is requires"]
    },
    discreption:{
        type:String,
        required:[true,"discreption field is requires"]
    },

    quantity:{
        type:Number,
        required:[true,"quantity field is requires"]
    },
    price:{
        type:Number,
        required:[true,"price field is requires"]
    },
    Order: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'}
    
    },{
        versionKey:false,
       timestamps:true 
    }
    
    )


    const Product = mongoose.model('Product',ProductSchema)

module.exports = Product;