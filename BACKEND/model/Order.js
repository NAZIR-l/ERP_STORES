const mongoose = require('mongoose');
const createrorder = mongoose.Schema({
    EMAILCustomer:   String,
    quantity: Number,
    Product: Array,
    Total_price: Number,
    Index: String,


    State : String,
    
    createdAt: {
        type: Date,
        immutable: true,
        default:() => Date.now(),
    }


});
module.exports = mongoose.model('Order', createrorder);
