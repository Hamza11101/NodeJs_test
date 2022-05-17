const mongoose = require("mongoose")
const schema = mongoose.Schema;



const OrderSchema = new schema({
    TotalPrice: {
        type: Number,

    },
    Product_List: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
    ,

    Client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },



}, {
    versionKey: false,
    timestamps: true
}

)


const Order = mongoose.model('Order', OrderSchema)

module.exports = Order;