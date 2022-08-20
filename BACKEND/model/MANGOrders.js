const mongoose = require('mongoose');
const Manageorder = mongoose.Schema({
    EMAILCustomer:   String,
    Totalquantity: Number,
    Total_price: Number,
    State : String,
    Product:Array,
    Location: String,
    DeliveryEmail: String,
    createdAt: {
        type: Date,
        immutable: true,
        default:() => Date.now(),
    }


});
module.exports = mongoose.model('ManagOrder', Manageorder);
