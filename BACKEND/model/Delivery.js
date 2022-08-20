const mongoose = require('mongoose');

const Delivery = new mongoose.Schema({
    NAME: String,
    Email : String,
    Phone:  Number,
    Car_Plate:  Number,
    Address: String,
    Salary: Number,   
    passwords : String,
    createdAt: {
        type: Date,
        immutable: true,
        default:() => Date.now(),
    }
});


module.exports = mongoose.model('Delivery', Delivery);
